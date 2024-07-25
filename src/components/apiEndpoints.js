// src/apiEndpoints.js
import apiRequest from './api';

export const getAllMails = async () => {
    return await apiRequest('/list');
};

export const getOneboxThread = async (threadId) => {
    return await apiRequest(`/messages/${threadId}`);
};

export const deleteEmailThread = async (threadId) => {
    return await apiRequest(`/messages/${threadId}`, 'DELETE');
};

export const resetOnebox = async () => {
    return await apiRequest('/reset');
};

export const replyToEmail = async (threadId, emailData) => {
    return await apiRequest(`/reply/${threadId}`, 'POST', emailData);
};
