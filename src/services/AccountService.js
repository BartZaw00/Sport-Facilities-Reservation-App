const loginUser = async (email, password) => {
  const response = await fetch(`${import.meta.env.VITE_ACCOUNT_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Nie udało się zalogować.");
  }
  const data = await response.json();
  const {
    userId: id,
    photoUrl,
    username,
    name,
    surname,
    email: userEmail,
    roleId: role,
    token,
  } = data;
  return {
    id,
    photoUrl,
    username,
    name,
    surname,
    email: userEmail,
    role,
    token,
  };
};

const registerUser = async ({ username, email, password }) => {
  const response = await fetch(`${import.meta.env.VITE_ACCOUNT_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, email, password }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Nie udało się zarejestrować użytkownika.");
  }

  const data = await response.json();
  return data;
};

const updateUserDetails = async (photoUrl, username, name, surname, email) => {
  const userData = localStorage.getItem("userData");
  const parsedUserData = JSON.parse(userData);
  const id = parsedUserData.id;

  const response = await fetch(
    `${import.meta.env.VITE_ACCOUNT_URL}/updateUser/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        photoUrl,
        username,
        name,
        surname,
        email,
      }),
    }
  );

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Nie udało się zaktualizować profilu.");
  }

  const data = await response.json();
  return data;
};

const updateUserPassword = async (password) => {
  const userData = localStorage.getItem("userData");
  const parsedUserData = JSON.parse(userData);
  const id = parsedUserData.id;

  const response = await fetch(
    `${import.meta.env.VITE_ACCOUNT_URL}/updateUserPassword/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password,
      }),
    }
  );

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Nie udało się zaktualizować hasła.");
  }

  const data = await response.json();
  return data;
};

const uploadImage = async (imageFile) => {
  const formData = new FormData();
  formData.append("file", imageFile);
  formData.append("upload_preset", "SportFacilities");

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${
        import.meta.env.VITE_CLOUD_NAME
      }/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await response.json();
    return data.url;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export { loginUser, registerUser, updateUserDetails, updateUserPassword, uploadImage };
