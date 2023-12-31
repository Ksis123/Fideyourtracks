import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button, Dropdown, Space, Badge } from 'antd';

import "./DefaultLayout.css"

const Navbar = () => {
    const navigate = useNavigate();
    const { user } = useSelector(state => state.user)

    const signout = () => {
        localStorage.removeItem('token')
        window.location.reload()
        navigate('/');
    };
    const checkUser = () => {
        let items = [];
        if (!user) {
            return items = [
                {
                    label: 'User',
                    key: '1',
                    icon: <i className="fa-solid fa-chalkboard-user" />,
                    onClick: () => navigate('/signup')
                }
            ];
        } else {
            return items = [
                {
                    label: 'Profile',
                    key: '1',
                    icon: <i className="fa-solid fa-user text-primary"></i>,

                    onClick: () => navigate('/profile')
                },
                {
                    label: '',
                    key: '2',

                },
                {
                    type: 'divider',
                },
                {
                    label: 'Sign-out',
                    key: '3',
                    danger: true,
                    icon: <i className="fa-solid fa-right-from-bracket text-active hover:text-secondary" />,
                    onClick: () => signout()
                },
            ];
        }
    }
    const items = checkUser();
    const menuProps = {
        items,
    };
    return (
        <div className="header flex justify-between p-5 items-center drop-shadow-lg">
            <h1 className='flex text-3xl ml-7 font-bold drop-shadow-lg' onClick={() => { navigate('/') }}>
                <img
                    className="lg:block h-10 w-auto "
                    src="https://salmon-charming-stingray-66.mypinata.cloud/ipfs/Qmby9QDniPG7R8bE8XTJvon8KGFX7ZdKFGyYbiPCb5W4zn?_gl=1*1chzkqg*_ga*MTE0ODI0Mjc0LjE2OTY4NjQ2MTU.*_ga_5RMPXG14TE*MTY5ODIyNTk3My4zNy4xLjE2OTgyMjYwODcuMTAuMC4w"
                />
                <b className='ml-3 text-primary hover:text-[#ff983d]'> Fide </b><b className='text-[#f4efeb]'>  yourtracks</b>
            </h1>
            <div className="w-[850px]" />
            <button className="upload-button  hover:text-primary drop-shadow-lg"
                onClick={() => {
                    navigate("/");
                }}
            >
                <i className="fa-solid fa-home text-2xl" /> Home
            </button>
            <button className="upload-button hover:text-primary drop-shadow-lg"
                onClick={() => {
                    navigate("/manage");
                }}
            >
                <i className="fa-solid fa-cloud-arrow-up text-2xl" /> Upload
            </button>

            <button className="upload-button drop-shadow-lg hover:text-primary"
                onClick={() => {
                    window.location.href = "http://localhost:3000/"
                }}>
                <i className="fa-solid fa-wallet fa-lg" /> NFT
            </button>
            <div className="flex items-center gap-5">
                <div class="flex mr-16 text-[#eb6d2efd]">
                    <Dropdown className='rounded-full text-sm font-medium drop-shadow-lg' menu={menuProps}>
                        <Button className='w-[auto] h-[auto] text-dark drop-shadow-lg border-[#ff7912e1]'>
                            <Space className='text-primary hover:text-[#2d81ab]'>
                                <Badge className=' -top-0 -right-0 bg-[#3cef18] hover:bg-[#26e0ee] rounded-full w-[15px] h-[15px] ' />
                                <h1 className='text-xl '>{user?.name}</h1>
                            </Space>
                        </Button>
                    </Dropdown>

                </div>
            </div>
        </div >
    )
}

export default Navbar;