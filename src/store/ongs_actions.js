export const SET_ONGS = "SET_ONGS";

export const loadOngs = () => {
  return async (dispatch) => {
    // url das ongs, das consultas no banco, etc.
    dispatch({
      type: SET_ONGS,
      ongData: [
        {
          id: "1",
          title: "ROTARY:",
          description: "Promover valores éticos e a paz a nível internacional.",
          imageUrl:
            "data:image/png;base64,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",
        },
        {
          id: "2",
          title: "TRIBOFUL DO BEM:",
          description: ".....",
          imageUrl: "",
        },
      ],
    });
  };
};
