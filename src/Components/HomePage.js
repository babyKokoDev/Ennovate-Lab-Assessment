import React from "react";
import Logo from "../assets/clickup_color-new.svg";
import { LockOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import LoginImage from '../assets/login__bg-top.f55110285bf7cd54.svg'
import Samsung from '../assets/samsung.108728b84db4ae18.svg'
import Booking from '../assets/booking-com.5fad4063445b4672.svg'
import Ibm from '../assets/ibm.a46ba77b5d0c065a.svg'
import Padres from '../assets/padres.fdacd062f4001223.svg'
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  const navigate = useNavigate()
  return (
    <div className="w-full">
      <div className="flex justify-between px-10 py-8 items-center">
        <img src={Logo} alt="" width={120} />
        <div className="flex gap-5 items-center">
          <p className="text-[14px] text-[#292d34] font-[500] leading-[16px]">
            Already playing with ClickUp?
          </p>
          <button className="text-[#ffffff] bg-[#7b68ee] py-[10px] px-[20px] rounded-xl" onClick={()=>navigate('/login')}>
            Login
          </button>
        </div>
      </div>
      <div className="w-full h-[660px] bg-gradient-to-r from-[#7b68ee] to-[#ee5e99] relative">
        <div className="absolute">
              <img src={LoginImage} alt="" width={2000}  />
        </div>
        <div className="mx-auto pt-[20px] px-[30px] bg-[#fff] w-[480px] rounded-[12px] text-center absolute left-[20%] right-[20%]">
          <p className="text-[32px] font-[700] leading-[46px] text-[#292d34] mb-3">
            Lets go!
          </p>
          <Form
            layout="vertical"
            onFinish={onFinish}
          >
            <Form.Item
              name="name"
              label="Full Name"
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon w-[20px]" />}
                placeholder="John Doe"
                className="h-[40px] font-[18px] mb-2"
              />
            </Form.Item>

            <Form.Item
              name="email"
              label="Email"
              rules={[
                {
                  required: true,
                  message: "Please input your Email!",
                },
              ]}
            >
              <Input
                prefix={<MailOutlined className="site-form-item-icon w-[20px]" />}
                placeholder="example@site.com"
                className="h-[40px] font-[18px] mb-2"
              />
            </Form.Item>

            <Form.Item
              name="password"
              label="Choose Password"
              rules={[
                {
                  required: true,
                  message: "Please input your Email!",
                },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon w-[20px]" />}
                placeholder="Minimum 8 characters"
                className="h-[40px] mb-2 cursor-pointer text-[#7b68ee] font-[500]"
                type="Password"
                iconRender={(visible) => (visible ? 'hide' : 'show')}
              />
            </Form.Item>
            

            <Button
              htmlType="submit"
              className="w-full bg-[#7b68ee] h-[50px] hover:bg-[#5f48ea] text-[14px] font-[800] text-[#fff]"
            >
              Play with ClickUp
            </Button>
            <p className="cursor-pointer mt-4 text-[12px] text-[#7b68ee]">or signup with SSO</p>
            <div className="bg-[#fafbfc]  text-[10px] p-2 text-[#7c828d] border-t-[1px] border-solid mt-2 w-[480px] ml-[-30px] rounded-b-[12px]">
            By clicking the button above, you agree to our Terms of Service and Privacy Policy.
            </div>
          </Form>
        </div>
         <div className="absolute bottom-[30px] left-[20%] right-[20%] h-[100px]">
             <div className="flex items-center gap-10 justify-center">
               <img src={Samsung} alt="" width={70} />
               <img src={Booking} alt="" width={70} />
               <img src={Ibm} alt="" width={70} />
               <img src={Padres} alt="" width={70} />
             </div>
             <p className="text-center mt-5 text-[12px] font-[700] leading-[17px] text-[#fff] opacity-60">See why 1,000,000+ teams are more productive with ClickUp</p>
         </div>
      </div>
      
    </div>
  );
};

export default HomePage;
