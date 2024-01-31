import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logo, sun } from "../assets";
import { navlinks } from "../constants";
import icon from "../assets/icon.png";
import {
  createCampaign,
  dashboard,
  logout,
  payment,
  profile,
  withdraw,
} from "../assets";
// import { useDisclosure } from "@chakra-ui/react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Text,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Avatar,
} from "@chakra-ui/react";
const Icon = ({ styles, name, imgUrl, isActive, disabled, handleClick }) => (
  <div
    className={`w-[48px] h-[48px] rounded-[10px] ${
      isActive && isActive === name && "bg-[#2c1742]"
    } flex justify-center items-center ${
      !disabled && "cursor-pointer"
    } ${styles}`}
    onClick={handleClick}
  >
    <img
      src={imgUrl}
      alt="fund_logo"
      className={`w-1/2 h-1/2 ${isActive !== name && "grayscale"}`}
    />
  </div>
);
const Sidebar = () => {
  const [isEditing, setIsEditing] = useState(false);

  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );
  const [user, setUser] = useState({
    companyname: "Zoho",
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    role: "adimin",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };
  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };
  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const OverlayTwo = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="auto"
      backdropInvert="80%"
      backdropBlur="2px"
    />
  );
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);
  const navigate = useNavigate();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [isActive, setIsActive] = useState("dashboard");
  return (
    <>
      <div className="flex justify-between items-center flex-col sticky top-5 h-[93vh]">
        <Link to="/">
          <Icon styles="w-[52px] h-[52px] bg-[#2c2f32]" imgUrl={icon} />
        </Link>
        <div className="flex-1 flex flex-col justify-between items-center bg-[#1c1c24] rounded-[20px] w-[76px] py-4 mt-12">
          <div className="flex flex-col justify-center items-center gap-3">
            {/* Manual iteration of navlinks */}
            <Icon
              imgUrl={dashboard}
              name="dashboard"
              styles="/* Add your styles for dashboard */"
              isActive={isActive === "dashboard"}
              handleClick={() => {
                setIsActive("dashboard");
                navigate("/user/home");
              }}
            />
            <Icon
              imgUrl={createCampaign}
              name="campaign"
              styles="/* Add your styles for campaign */"
              isActive={isActive === "campaign"}
              handleClick={() => {
                setIsActive("campaign");
                navigate("/user/courses");
              }}
            />
            <Icon
              imgUrl={payment}
              name="payment"
              styles="/* Add your styles for payment */"
              isActive={isActive === "payment"}
              handleClick={() => {
                setIsActive("payment");
                navigate("/user/addenquiry");
              }}
            />
            <Icon
              imgUrl={withdraw}
              name="withdraw"
              styles="/* Add your styles for withdraw */"
              isActive={isActive === "withdraw"}
              handleClick={() => {
                setIsActive("withdraw");
                navigate("/user/viewenquiry");
              }}
            />

            <button
              onClick={onOpen}
              className="w-[48px] h-[48px] rounded-[10px] bg-gray-00 flex justify-center items-center cursor-pointer"
            >
              {" "}
              <Icon
                imgUrl={profile}
                name="profile"
                styles="/* Add your styles for profile */"
                isActive={isActive === "profile"}
                // handleClick={() => {
                //   setIsActive("profile");
                //   navigate("/user/profile");
                // }}
                onClick={onOpen}
              >
                {" "}
              </Icon>
            </button>

            <Icon
              imgUrl={logout}
              name="logout"
              styles="/* Add your styles for logout */"
              isActive={isActive === "logout"}
              handleClick={() => {
                setIsActive("logout");
                navigate("/login");
              }}
            />
          </div>
          <Icon styles="bg-[#1c1c24] shadow-secondary" imgUrl={sun} />
        </div>
      </div>

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <Avatar name={user.firstName} size="xl" />

              <h1></h1>
              <br></br>
              <FormLabel>
                First name : <b>{user.firstName}</b>{" "}
              </FormLabel>
              <h1></h1>
              <FormLabel>
                Last name : <b>{user.lastName}</b>{" "}
              </FormLabel>
              <FormLabel>
                Last name : <b>{user.email}</b>{" "}
              </FormLabel>
              <FormLabel>
                College :{" "}
                <b>Sri krishna college of engineering and technology</b>{" "}
              </FormLabel>
            </FormControl>
            {isEditing ? (
              <div className="edit-form">
                {/* Add form fields for editing user profile */}
                {/* <label>
                  Company Name:
                  <Input
                    type="text"
                    name="companyname"
                    value={user.companyname}
                    onChange={handleInputChange}
                  />
                </label> */}
                <br></br>
                <label>
                  FirstName:
                  <br></br>
                  <Input
                    type="text"
                    name="firstName"
                    value={user.firstName}
                    onChange={handleInputChange}
                  />
                </label>
                <br></br>
                <label>
                  LastName:
                  <br></br>
                  <Input
                    type="text"
                    name="lastName"
                    value={user.lastName}
                    onChange={handleInputChange}
                  />
                </label>
                <br></br>

                <label>
                  Email:
                  <br></br>
                  <Input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleInputChange}
                  />
                </label>
                <br></br>
                <label>
                  role:
                  <br></br>
                  <Input
                    type="text"
                    name="role"
                    value={user.role}
                    onChange={handleInputChange}
                  />
                </label>
                {/* Add more form fields as needed */}
                <Button onClick={handleSaveClick}>Save</Button>
              </div>
            ) : (
              <Button onClick={handleEditClick}>Edit</Button>
            )}
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Sidebar;
