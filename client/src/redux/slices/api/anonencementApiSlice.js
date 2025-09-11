
import { apiSlice } from "../apiSlice";
import { ANNOUNCEMENTS_URL } from "../../../utils/contants";

export const anoncementApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createAnnouncement: builder.mutation({
            query: (data) => ({
                url: `${ANNOUNCEMENTS_URL}/create`,
                method: "POST",
                body: data,
                credentials: "include",
            }),
        }),

        getAnnouncements: builder.query({
            query: () => ({
                url: `${ANNOUNCEMENTS_URL}`,
                method: "GET",
                credentials: "include",
            }),
        }),

        getAnnouncementById: builder.query({
            query: (id) => ({
                url: `${ANNOUNCEMENTS_URL}/${id}`,
                method: "GET",
                credentials: "include",
            }),
        }),
        updateAnnouncement: builder.mutation({
            query: ({ id, data }) => ({
                url: `${ANNOUNCEMENTS_URL}/${id}`,
                method: "PUT",
                body: data,
                credentials: "include",
            }),
        }),
        deleteAnnouncement: builder.mutation({
            query: (id) => ({
                url: `${ANNOUNCEMENTS_URL}/delete/${id}`,
                method: "DELETE",
                credentials: "include",
            }),
        }),
        createComment: builder.mutation({
            query: ({ id, data }) => ({
                url: `${ANNOUNCEMENTS_URL}/comment/${id}`,
                method: "POST",
                body: data,
                credentials: "include",
            }),
        }),
        updateComment: builder.mutation({
            query: ({ id, commentId, data }) => ({
                url: `${ANNOUNCEMENTS_URL}/comment/${id}/${commentId}`,
                method: "PUT",
                body: data,
                credentials: "include",
            }),
        }),
        deleteComment: builder.mutation({
            query: ({ id, commentId }) => ({
                url: `${ANNOUNCEMENTS_URL}/comment/${id}/${commentId}`,
                method: "DELETE",
                credentials: "include",
            }),
        }),
    }),
});
export const { useCreateAnnouncementMutation, useGetAnnouncementsQuery, useGetAnnouncementByIdQuery, useUpdateAnnouncementMutation, useDeleteAnnouncementMutation ,useCreateCommentMutation,useUpdateCommentMutation,useDeleteCommentMutation} = anoncementApiSlice;