export const fetchUsers = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/users'
  })
};

export const fetchCurrentUser = (currentUserId) => {
    return $.ajax({
      url: `/api/users/${currentUserId}`,
      method: 'GET'
    });
};

export const updateCurrentUser = (user) => {
    return $.ajax({
      url: `/api/users/${user.id}`,
      method: 'PATCH',
      data: {user}
    });
};

export const deleteCurrentUser = id => {
    return $.ajax({
      method: 'DELETE',
      url: `api/users/${id}`
    });
};