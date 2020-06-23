export const SET_ONGS = "SET_ONGS";

export const loadOngs = () => {
    return async dispatch => {
        // url das ongs, das consultas no banco, etc.
        dispatch({
            type: SET_ONGS,
            ongData: [
                {
                    id: '1',
                    title: 'OngFeliz',
                    description: 'Ong Feliz do barulho!',
                    imageUrl: 'https://guiadeindaia.com.br/img/noticias/2225.jpg'
                },
                {
                    id: '2',
                    title: 'OngFeliz',
                    description: 'Ong Feliz do barulho!',
                    imageUrl: 'https://guiadeindaia.com.br/img/noticias/2225.jpg'
                },
                {
                    id: '3',
                    title: 'OngFeliz',
                    description: 'Ong Feliz do barulho!',
                    imageUrl: 'https://guiadeindaia.com.br/img/noticias/2225.jpg'
                },
                {
                    id: '4',
                    title: 'OngFeliz',
                    description: 'Ong Feliz do barulho!',
                    imageUrl: 'https://guiadeindaia.com.br/img/noticias/2225.jpg'
                }
            ]
        })
    }
}