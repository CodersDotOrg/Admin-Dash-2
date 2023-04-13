import React, { useState } from "react";
import { motion } from "framer-motion";
import { VscPreview } from "react-icons/vsc";
import { GrAddCircle } from "react-icons/gr";
import { MdDeliveryDining } from "react-icons/md";
import MyNavitem from "./MyNavitem";
import { Link, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "./SideBar.css";

const SideBar = ({ children }) => {
  const navigate = useNavigate();

  const item = {
    title: "Advance",
    icon: "bi-view-list",
    childrens: [
      {
        title: "Search",
        path: "/search",
      },
      {
        title: "History",
        path: "/history",
      },
    ],
  };

  // return components
  return (
    <>
      <div className="bg-white text-black">
        <div className="main-container">
          <motion.div
            animate={{
              width: "270px",
              height: "100vh",
            }}
            className={`sidebar `}
          >
            <div className="top_section">
              <h2 className="py-8 px-6 w-full border-2 border-blue-500 font-bold rounded-sm text-center bg-tailtertiary3 text-black flex">
                ADMIN DASHBOARD
              </h2>
            </div>

            {/* Home and Logout button */}
            <div>
              <div className="flex justify-center px-2 text-black font-bold">
                <button
                  className=" bg-tailtertiary py-2 hover:bg-tailtertiary3 w-full rounded-sm"
                  onClick={() => navigate("/dashboard/home")}
                >
                  HOME
                </button>
                <button
                  className="ml-2 py-2 bg-tailtertiary hover:bg-red-600 w-full rounded-sm"
                  onClick={() => navigate("/")}
                >
                  LOGOUT
                </button>
              </div>
            </div>

            {/* routes */}
            <section className="routes">
              <h2 className="border-2 border-black justify-center flex mx-1 py-2 bg-tailtertiary justify-center">
                Product Menu
              </h2>
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Category
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <Link class="dropdown-item" href="#">
                      <MyNavitem
                        path="/dashboard/addcategory"
                        routename="Add Category"
                        icon={<GrAddCircle />}
                      />
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" href="#">
                      <MyNavitem
                        path="/dashboard/editcategory"
                        routename="Edit Category"
                        icon={<GrAddCircle />}
                      />
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Sub-Category
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <Link class="dropdown-item" href="#">
                      <MyNavitem
                        path="/dashboard/addsubcategory"
                        routename="Add SubCategory"
                        icon={<GrAddCircle />}
                      />
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" href="#">
                      <MyNavitem
                        path="/dashboard/editsubcategory"
                        routename="Edit SubCategory"
                        icon={<GrAddCircle />}
                      />
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Brand
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <Link class="dropdown-item" href="#">
                      <MyNavitem
                        path="/dashboard/addbrand"
                        routename="Add Brand"
                        icon={<GrAddCircle />}
                      />
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" href="#">
                      <MyNavitem
                        path="/dashboard/editbrand"
                        routename="Edit Brand"
                        icon={<GrAddCircle />}
                      />
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  UOM
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <Link class="dropdown-item" href="#">
                      <MyNavitem
                        path="/dashboard/AddUom"
                        routename="Add UOM"
                        icon={<GrAddCircle />}
                      />
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" href="#">
                      <MyNavitem
                        path="/dashboard/EditUom"
                        routename="Edit UOM"
                        icon={<GrAddCircle />}
                      />
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Product
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <Link class="dropdown-item" href="#">
                      <MyNavitem
                        path="/dashboard/addproduct"
                        routename="Add Product"
                        icon={<GrAddCircle />}
                      />
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" href="#">
                      <MyNavitem
                        path="/dashboard/editproduct"
                        routename="Edit Product"
                        icon={<GrAddCircle />}
                      />
                    </Link>
                  </li>
                </ul>
              </div>

              <MyNavitem
                path="/dashboard/viewproducts"
                routename="View Products"
                icon={<VscPreview />}
              />

              <h2 className="border-2 border-black justify-center flex  mx-1 py-2 bg-tailtertiary justify-center">
                Add Role Menu
              </h2>
              <MyNavitem
                path="/dashboard/adddeliveryagent"
                routename="Add Delivery Agent"
                icon={<GrAddCircle />}
              />
              <MyNavitem
                path="/dashboard/addinventorymanager"
                routename="Add Inventory Manager"
                icon={<GrAddCircle />}
              />
              <MyNavitem
                path="/dashboard/addvendor"
                routename="Add Vendor"
                icon={<GrAddCircle />}
              />

              <MyNavitem
                path="/dashboard/editvendor"
                routename="Edit Vendor"
                icon={<GrAddCircle />}
              />
              <MyNavitem
                path="/dashboard/editdeliveryagent"
                routename="Edit Delivery Agent"
                icon={<GrAddCircle />}
              />
              <MyNavitem
                path="/dashboard/editinventorymanager"
                routename="Edit Inventory Manager"
                icon={<GrAddCircle />}
              />

              <h2 className="border-2 border-black justify-center flex  mx-1 py-2 bg-tailtertiary justify-center">
                View Menu
              </h2>
              <MyNavitem
                path="/dashboard/viewdeliveryagents"
                routename="View Delivery Agents"
                icon={<VscPreview />}
              />
              <MyNavitem
                path="/dashboard/viewinventorymanagers"
                routename="View Inventory Managers"
                icon={<VscPreview />}
              />
              <MyNavitem
                path="/dashboard/viewvendors"
                routename="View Vendors"
                icon={<VscPreview />}
              />
            </section>
          </motion.div>

          <main>{children}</main>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default SideBar;
