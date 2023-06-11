import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import BlogDataService from "../backend/firestore";

const BlogList = ({ getBlogId }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    getBlogs();
  }, []);

  const getBlogs = async () => {
    const data = await BlogDataService.getAllBlog();
    console.log(data.docs);
    setBlogs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deleteHandler = async (id) => {
    await BlogDataService.deleteBlog(id);
    getBlogs();
  };
  return (
    <>
      <div className="mb-2">
        <Button variant="dark edit" onClick={getBlogs}>
          Refresh List
        </Button>
      </div>

      {/* <pre>{JSON.stringify(blogs, undefined, 2)}</pre> */}
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>ID</th>
            <th>title</th>
            <th>date</th>
            <th>name</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((doc, index) => {
            return (
              <tr key={doc.id}>
                <td>{doc.id}</td>
                <td>{doc.btitle}</td>
                <td>{doc.date}</td>
                <td>{doc.name}</td>
                <td>
                  <Button
                    variant="secondary"
                    className="edit"
                    onClick={(e) => getBlogId(doc.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    className="delete"
                    onClick={(e) => deleteHandler(doc.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default BlogList;