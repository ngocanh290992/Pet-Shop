import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router";
import HeaderAdminTemplate from "./HeaderAdminTemplate";

export default function AdminTemplate(props) {
  const { Component, ...restProps } = props;
  const { openMenu } = useSelector((state) => state.MenuAdminReducer);

  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <Fragment>
            <HeaderAdminTemplate />

            <main className="main" id="main">
              <div className={`menu ${openMenu}`}>
                {/* Menu User */}
                <div className="menu__user">
                  <h3 className="menu--title">
                    <i className="ri-user-line"></i>
                    User
                  </h3>
                  <div className="menu--content">
                    <ul>
                      <li>
                        <i className="ri-user-add-line"></i>
                        Add User
                      </li>
                      <li>
                        <i className="ri-user-shared-line"></i>
                        Edit User
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Menu Product */}
                <div className="menu__product">
                  <h3 className="menu--title">
                    <i className="ri-quill-pen-line"></i>
                    Product
                  </h3>
                  <div className="menu--content">
                    <ul>
                      <li>
                        <i className="ri-pencil-ruler-line"></i>
                        Add Product
                      </li>
                      <li>
                        <i className="ri-edit-line"></i>
                        Edit Product
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="content">Content</div>
            </main>
          </Fragment>
        );
      }}
    />
  );
}
