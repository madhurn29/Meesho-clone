import axios from "axios";

export const handleMenGet = async (setIsLoading, setProducts, setCategory) => {
  setIsLoading(true);
  try {
    const response = await fetch(
      "https://63c701b54ebaa80285521e6e.mockapi.io/men"
    );
    const data = await response.json();
    setProducts(data);
    setCategory("men");
    setIsLoading(false);
  } catch (error) {
    console.log(error);
    setIsLoading(false);
  }
};

export const handleWomenEthGet = async (
  setIsLoading,
  setProducts,
  setCategory
) => {
  setIsLoading(true);
  try {
    const response = await fetch(
      "https://63c7f361075b3f3a91d6b179.mockapi.io/women-ethnic"
    );
    const data = await response.json();
    setProducts(data);
    setCategory("women");
    setIsLoading(false);
  } catch (error) {
    console.log(error);
    setIsLoading(false);
  }
};

export const handleWomenWestGet = async (
  setIsLoading,
  setProducts,
  setCategory
) => {
  setIsLoading(true);
  try {
    const response = await fetch(
      "https://63c6ba9bd307b769673fb1fa.mockapi.io/women-western"
    );
    const data = await response.json();
    setProducts(data);
    setCategory("women-west");
    setIsLoading(false);
  } catch (error) {
    console.log(error);
    setIsLoading(false);
  }
};
export const handleKidsGet = async (setIsLoading, setProducts, setCategory) => {
  setIsLoading(true);
  try {
    const response = await fetch(
      "https://63c701b54ebaa80285521e6e.mockapi.io/kids"
    );
    const data = await response.json();
    setProducts(data);
    setCategory("kids");
    setIsLoading(false);
  } catch (error) {
    console.log(error);
    setIsLoading(false);
  }
};
export const handleMakaupGet = async (
  setIsLoading,
  setProducts,
  setCategory
) => {
  setIsLoading(true);
  try {
    const response = await fetch(
      "https://63c705d44ebaa80285526612.mockapi.io/makeup"
    );
    const data = await response.json();
    setProducts(data);
    setCategory("makeup");
    setIsLoading(false);
  } catch (error) {
    console.log(error);
    setIsLoading(false);
  }
};
export const handleHomeGet = async (setIsLoading, setProducts, setCategory) => {
  setIsLoading(true);
  try {
    const response = await fetch(
      "https://63c705d44ebaa80285526612.mockapi.io/home-kitchen"
    );
    const data = await response.json();
    setProducts(data);
    setCategory("home");
    setIsLoading(false);
  } catch (error) {
    console.log(error);
    setIsLoading(false);
  }
};

// All Delete Functionality

export const handleMenDelete = (id, setIsLoading, setProducts, setCategory) => {
  axios
    .delete(`https://63c701b54ebaa80285521e6e.mockapi.io/men/${id}`)
    .then((res) => {
      console.log(res.data);
      handleMenGet(setIsLoading, setProducts, setCategory);
    })
    .catch((e) => {
      console.log(e);
    });
};

export const handleWomenEthDelete = (
  id,
  setIsLoading,
  setProducts,
  setCategory
) => {
  axios
    .delete(`https://63c7f361075b3f3a91d6b179.mockapi.io/women-ethnic/${id}`)
    .then((res) => {
      console.log(res.data);
      handleWomenEthGet(setIsLoading, setProducts, setCategory);
    })
    .catch((e) => {
      console.log(e);
    });
};

export const handleWomenWestDelete = (
  id,
  setIsLoading,
  setProducts,
  setCategory
) => {
  axios
    .delete(`https://63c6ba9bd307b769673fb1fa.mockapi.io/women-western/${id}`)
    .then((res) => {
      console.log(res.data);
      handleWomenWestGet(setIsLoading, setProducts, setCategory);
    })
    .catch((e) => {
      console.log(e);
    });
};

export const handleKidsDelete = (
  id,
  setIsLoading,
  setProducts,
  setCategory
) => {
  axios
    .delete(`https://63c701b54ebaa80285521e6e.mockapi.io/kids/${id}`)
    .then((res) => {
      console.log(res.data);
      handleKidsGet(setIsLoading, setProducts, setCategory);
    })
    .catch((e) => {
      console.log(e);
    });
};

export const handleMakeupDelete = (
  id,
  setIsLoading,
  setProducts,
  setCategory
) => {
  axios
    .delete(`https://63c705d44ebaa80285526612.mockapi.io/makeup/${id}`)
    .then((res) => {
      console.log(res.data);
      handleMakaupGet(setIsLoading, setProducts, setCategory);
    })
    .catch((e) => {
      console.log(e);
    });
};

export const handleHomeDelete = (
  id,
  setIsLoading,
  setProducts,
  setCategory
) => {
  axios
    .delete(`https://63c705d44ebaa80285526612.mockapi.io/home-kitchen/${id}`)
    .then((res) => {
      console.log(res.data);
      handleHomeGet(setIsLoading, setProducts, setCategory);
    })
    .catch((e) => {
      console.log(e);
    });
};

//Edit The All Pages

export const handleHomeEdit = (
  id,
  setIsLoading,
  setProducts,
  setCategory,
  data
) => {
  axios
    .put(`https://63c705d44ebaa80285526612.mockapi.io/home-kitchen/${id}`, data)
    .then((res) => {
      console.log(res.data);
      handleHomeGet(setIsLoading, setProducts, setCategory);
    })
    .catch((e) => {
      console.log(e);
    });
};

export const handleMenEdit = (
  id,
  setIsLoading,
  setProducts,
  setCategory,
  data
) => {
  axios
    .put(`https://63c701b54ebaa80285521e6e.mockapi.io/men/${id}`, data)
    .then((res) => {
      console.log(res.data);
      handleMenGet(setIsLoading, setProducts, setCategory);
    })
    .catch((e) => {
      console.log(e);
    });
};

export const handleWomenEthEdit = (
  id,
  setIsLoading,
  setProducts,
  setCategory,
  data
) => {
  axios
    .put(`https://63c7f361075b3f3a91d6b179.mockapi.io/women-ethnic/${id}`, data)
    .then((res) => {
      console.log(res.data);
      handleWomenEthGet(setIsLoading, setProducts, setCategory);
    })
    .catch((e) => {
      console.log(e);
    });
};

export const handleWomenWestEdit = (
  id,
  setIsLoading,
  setProducts,
  setCategory,
  data
) => {
  axios
    .put(
      `https://63c6ba9bd307b769673fb1fa.mockapi.io/women-western/${id}`,
      data
    )
    .then((res) => {
      console.log(res.data);
      handleWomenWestGet(setIsLoading, setProducts, setCategory);
    })
    .catch((e) => {
      console.log(e);
    });
};

export const handleKidEdit = (
  id,
  setIsLoading,
  setProducts,
  setCategory,
  data
) => {
  axios
    .put(`https://63c701b54ebaa80285521e6e.mockapi.io/kids/${id}`, data)
    .then((res) => {
      console.log(res.data);
      handleKidsGet(setIsLoading, setProducts, setCategory);
    })
    .catch((e) => {
      console.log(e);
    });
};

export const handleMakeupEdit = (
  id,
  setIsLoading,
  setProducts,
  setCategory,
  data
) => {
  axios
    .put(`https://63c705d44ebaa80285526612.mockapi.io/makeup/${id}`, data)
    .then((res) => {
      console.log(res.data);
      handleMakaupGet(setIsLoading, setProducts, setCategory);
    })
    .catch((e) => {
      console.log(e);
    });
};
