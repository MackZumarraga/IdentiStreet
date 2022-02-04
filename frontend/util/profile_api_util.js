export const updateCurrentUser = (currentUser) => {
    return $.ajax({
      url: `/api/users/${currentUser.id}`,
      method: 'PATCH',
      data: {currentUser}
    });
};

export const deleteCurrentUser = id => {
    return $.ajax({
      method: 'DELETE',
      url: `api/users/${id}`
    });
};