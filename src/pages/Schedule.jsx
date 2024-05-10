import React from 'react';
import { motion } from "framer-motion";
import { Mobile, PC } from "../styles/Global_d"; 
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

const Schedule = () => {

    const navigate = useNavigate(); // useHistory 훅을 사용하여 history 인스턴스를 생성합니다.

    // 2단계: 이미지 클릭 시 schedule 페이지로 이동하는 함수를 구현합니다.
    const handleClick = () => {
        navigate("/Sadd"); // "/schedule" 경로로 이동합니다.
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Mobile>
                <ContainerM>
                    <div id='Slogo'>
                        <img src="/images/Slogo.svg" alt="Signup Button"></img>
                    </div>

                    <div id="title">
                     
                        오늘의 일정
                    </div>

                    <div id='btn_A' onClick={handleClick} >
                        <img src="/images/Schedule/add_Btn.svg" alt="Signup Button"></img>
                    </div>
                    
                </ContainerM>
            </Mobile>
            <PC>
                <ContainerP>pc</ContainerP>
            </PC>
        </motion.div>
    );
};

const ContainerM = styled.div`
    background-color: #FFF7F0;
    flex-direction: column;
    padding: 8px;
    min-height: 100vh;
    display: flex;
    position: relative;
    align-items: center; 


    #Slogo {
        align-self: flex-start; /* Flex 컨테이너 내에서 왼쪽 정렬 */
        width: 100%; /* 너비를 100%로 설정하여 div의 전체 너비를 차지하게 함 */
        text-align: left; /* 이미지를 왼쪽으로 정렬 */
    }

    #title {
        color: #333;
        font-size: 24px;
        font-weight: bold;
        margin-top: 20px;
        margin-bottom: 40px; /* 타이틀과 입력 필드 사이의 간격을 조정 */
        margin-bottom: 20px; /* 각 입력 필드 그룹 간 마진 설정 */
    }

    
`;


const ContainerP = styled.div`
    min-height: 100vh;
    background-color: #FFF7F0;
`;

export default Schedule;
