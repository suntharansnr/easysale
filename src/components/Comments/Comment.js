import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

export default function Comment({comment,fetchProduct}) {

  const [message, setMessage] = useState("");
  const [validationError, setValidationError] = useState({});
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const deleteComment = async (e) => {
    e.preventDefault();
    
    await axios
      .delete(`${process.env.REACT_APP_API_URL}/api/comment/${comment.id}`,{
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${userInfo["data"]["token"]}`,
        },
      })
      .then(({ data }) => {
        Swal.fire({
          icon: "success",
          text: data.message,
        });
        fetchProduct();
      })
      .catch(({ response }) => {
        if (response.status === 422) {
          setValidationError(response.data.errors);
        } else {
          Swal.fire({
            text: response.data.message,
            icon: "error",
          });
        }
      });
  };

  return (
    <li>
      <div className="media">
        <div className="thumb-left">
          <a href="#">
            <img className="img-fluid" src={comment.author_image ? `${process.env.REACT_APP_API_URL}/${comment.author_image}` : `${process.env.REACT_APP_API_URL}/assets/img-not-found.jpg`} alt="" />
          </a>
        </div>
        <div className="info-body">
          <div className="media-heading">
            <h4 className="name">{comment?.author_name}</h4>
            <span className="comment-date">
              <i className="lni-alarm-clock"></i> {comment?.created_at}
            </span>
            <a href="#" className="reply-link">
              <i className="lni-reply"></i> Reply
            </a>
            <button onClick={(e) => deleteComment(e)} className="ml-1 btn-sm btn-danger" type="button">
              <i className="lni-trash"></i>
            </button>
          </div>
          <p>
            {comment?.body}
          </p>
        </div>
      </div>
    </li>
  );
}
