import { useState, useEffect } from "react";
import { updatePost, deletePost } from "../api/PostService";

export const usePostModal = () => {
    const [posts, setPosts] = useState([]);
    const [postSeleccionado, setPostSeleccionado] = useState(null);
    const [modalEditar, setModalEditar] = useState(false);
    const [modalBorrar, setModalBorrar] = useState(false);

    useEffect(() => {
        
    })
}