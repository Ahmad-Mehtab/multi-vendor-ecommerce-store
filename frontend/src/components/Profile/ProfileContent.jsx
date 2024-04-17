import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "../../styles/styles";
import { AiOutlineArrowRight, AiOutlineCamera } from "react-icons/ai";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { TbReceiptRefund } from "react-icons/tb";
import { MdOutlineTrackChanges } from "react-icons/md";

function ProfileContent({ active }) {
  const user = useSelector((state) => state.user);
  const [name, setName] = useState(user.currentUser.name);
  const [email, setEmail] = useState(user.currentUser.email);
  const [phoneNumber, setPhoneNumber] = useState();
  const [zipCode, setZipCode] = useState();
  const [address1, setAddress1] = useState();
  const [address2, setAddress2] = useState();
  return (
    <div className="w-full">
      {active === 0 && (
        <>
          <div className="flex justify-center w-full">
            <div className="relative">
              <img
                src={`${user?.currentUser?.avatar?.url}`}
                className="w-[150px] h-[150px] rounded-full object-cover border-[3px] border-[#3ad132]"
                alt=""
              />
              <div className="w-[30px] h-[30px] bg-[#E3E9EE] rounded-full flex items-center justify-center cursor-pointer absolute bottom-[5px] right-[5px]">
                <input
                  type="file"
                  id="image"
                  className="hidden"
                  // onChange={handleImage}
                />
                <label htmlFor="image">
                  <AiOutlineCamera />
                </label>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="w-full">
            <form>
              <div className="flex w-full mt-5">
                <div className="w-[50%]">
                  <label className={`${styles.label}`}>Full Name</label>
                  <input
                    type="text"
                    className={`${styles.input}  !w-[95%]`}
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="w-[50%]">
                  <label className={`${styles.label}`}>Email Address</label>
                  <input
                    type="text"
                    className={`${styles.input}  !w-[95%]`}
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex w-full mt-5">
                <div className="w-[50%]">
                  <label className={`${styles.label}`}>Phone Number</label>
                  <input
                    type="text"
                    className={`${styles.input}  !w-[95%]`}
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
                <div className="w-[50%]">
                  <label className={`${styles.label}`}>Zip Code</label>
                  <input
                    type="text"
                    className={`${styles.input}  !w-[95%]`}
                    required
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex w-full mt-5">
                <div className="w-[50%]">
                  <label className={`${styles.label}`}>Address</label>
                  <input
                    type="text"
                    className={`${styles.input}  !w-[95%]`}
                    required
                    value={address1}
                    onChange={(e) => setAddress1(e.target.value)}
                  />
                </div>
                <div className="w-[50%]">
                  <label className={`${styles.label}`}>Address 2</label>
                  <input
                    type="text"
                    className={`${styles.input}  !w-[95%]`}
                    required
                    value={address2}
                    onChange={(e) => setAddress2(e.target.value)}
                  />
                </div>
              </div>
              <input
                className={`w-[240px] h-[40px] border border-[#3a24db] text-center text-[#3a24db] rounded-[3px] mt-8 cursor-pointer`}
                value="update"
                type="submit"
                required
              />
            </form>
          </div>
        </>
      )}

      {/* All orders */}
      {active === 1 && (
        <div>
          <AllOrders />
        </div>
      )}
      {/* All orders */}
      {active === 3 && (
        <div>
          <Refunds />
        </div>
      )}
      {/* All orders */}
      {active === 5 && (
        <div>
          <TrackChanges />
        </div>
      )}
    </div>
  );
}

const AllOrders = () => {
  const orders = [
    {
      _id: "54l54kl3jlkjlkjh4",
      orderItems: [
        {
          name: "Iphone 14 pro max",
        },
      ],
      totalPrice: 120,
      orderStatus: "processing",
    },
  ];
  // const { user } = useSelector((state) => state.user);
  // const { orders } = useSelector((state) => state.order);
  // const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getAllOrdersOfUser(user._id));
  }, []);

  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },
    {
      field: "status",
      headerName: "Status",
      flex: 0.7,
      editable: true,
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 130,
      flex: 0.7,
      editable: true,
    },
    {
      field: "total",
      headerName: "Total",
      type: "number",
      flex: 0.7,
      editable: true,
    },
    {

      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/order/${params.id}`}>
              <Button>
                <AiOutlineArrowRight size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
  ];

  const rows = [];

  orders &&
    orders.forEach((item) => {
      rows.push({
        id: item._id,
        itemsQty: item.orderItems?.length,
        total: "US$ " + item.totalPrice,
        status: item.orderStatus,
      });
    });

  return (
    <div className="pl-8 pt-1">
      <Box sx={{ height: 300, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </div>
  );
};

const Refunds = () => {
  const orders = [
    {
      _id: "ccccc3333",
      orderItems: [
        {
          name: "Iphone 11 pro max",
        },
      ],
      totalPrice: 160,
      orderStatus: "processing",
    },
  ];
  // const { user } = useSelector((state) => state.user);
  // const { orders } = useSelector((state) => state.order);
  // const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getAllOrdersOfUser(user._id));
  }, []);

  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },
    {
      field: "status",
      headerName: "Status",
      flex: 0.7,
      editable: true,
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 130,
      flex: 0.7,
      editable: true,
    },
    {
      field: "total",
      headerName: "Total",
      type: "number",
      flex: 0.7,
      editable: true,
    },
    {

      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/order/${params.id}`}>
              <Button>
                <TbReceiptRefund size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
  ];

  const rows = [];

  orders &&
    orders.forEach((item) => {
      rows.push({
        id: item._id,
        itemsQty: item.orderItems?.length,
        total: "US$ " + item.totalPrice,
        status: item.orderStatus,
      });
    });

  return (
    <div className="pl-8 pt-1">
      <Box sx={{ height: 300, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </div>
  );
};

const TrackChanges = () => {
  const orders = [
    {
      _id: "ccccc3333",
      orderItems: [
        {
          name: "Iphone 11 pro max",
        },
      ],
      totalPrice: 160,
      orderStatus: "processing",
    },
  ];
  // const { user } = useSelector((state) => state.user);
  // const { orders } = useSelector((state) => state.order);
  // const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getAllOrdersOfUser(user._id));
  }, []);

  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },
    {
      field: "status",
      headerName: "Status",
      flex: 0.7,
      editable: true,
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 130,
      flex: 0.7,
      editable: true,
    },
    {
      field: "total",
      headerName: "Total",
      type: "number",
      flex: 0.7,
      editable: true,
    },
    {

      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/order/${params.id}`}>
              <Button>
                <MdOutlineTrackChanges color="black" size={25} />
              </Button>
            </Link>
          </>
        );
      },
    },
  ];

  const rows = [];

  orders &&
    orders.forEach((item) => {
      rows.push({
        id: item._id,
        itemsQty: item.orderItems?.length,
        total: "US$ " + item.totalPrice,
        status: item.orderStatus,
      });
    });

  return (
    <div className="pl-8 pt-1">
      <Box sx={{ height: 300, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </div>
  );
};

export default ProfileContent;
