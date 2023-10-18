import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Swal from "sweetalert2";

function CreateComment({ className = "",post_id,fetchProduct}) {
  const [message, setMessage] = useState("");
  const [validationError, setValidationError] = useState({});
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const saveComment = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("body", message);
    formData.append('post_id',post_id);
    
    await axios
      .post(`${process.env.REACT_APP_API_URL}/api/comment`, formData, {
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
    <DIV className={`${className}`}>
      <div id="respond">
        <h2 className="respond-title">Leave A Comment</h2>
        <form onSubmit={(e) => saveComment(e)}>
          <div className="row">
            <div className="col-lg-12 col-md-12col-xs-12">
              <div className="form-group">
                <textarea
                  id="comment"
                  className="form-control"
                  name="comment"
                  cols="45"
                  rows="8"
                  placeholder="Massage..."
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <button type="submit" id="submit" className="btn btn-common">
                Post Comment
              </button>
            </div>
          </div>
        </form>
      </div>
    </DIV>
  );
}

const DIV = styled.div`
  width: 100%;
  /* margin-top: var(--margin-top-fix-nav);  */ /*only Logo */
`;

export default CreateComment;
