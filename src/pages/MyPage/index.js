import React from "react";
import { useForm, Controller } from "react-hook-form";

import styled from "styled-components";
import { textColor } from "../../styles/colors";
import { media } from "../../styles/mixin";

function MyPage() {
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    const handlePhoneChange = (e) => {
        const value = e.target.value;
        if (/[^0-9]/.test(value)) {
            e.target.value = value.replace(/[^0-9]/g, "");
        }
    };

    return (
        <>
            <ProfileWrap>
                <WrapName>회원 정보</WrapName>
                <ProfileBox>
                    <ProfilePicture>
                        <ProfilePictureImage></ProfilePictureImage>
                    </ProfilePicture>
                    <ProfileInfo>
                        <ProfileText>
                            <ProfileName>김상아</ProfileName> 님, 반갑습니다!
                        </ProfileText>
                        <ProfileButton>프로필 사진 변경하기</ProfileButton>
                    </ProfileInfo>
                </ProfileBox>
            </ProfileWrap>
            <BadgeWrap>
                <BadgeTitle>마이 뱃지</BadgeTitle>
                <BadgeBoxWrap>
                    <BadgeBox></BadgeBox>
                    <BadgeBox></BadgeBox>
                    <BadgeBox></BadgeBox>
                    <BadgeBox></BadgeBox>
                </BadgeBoxWrap>
            </BadgeWrap>
            <EditWrap>
                <WrapName>회원 정보 수정</WrapName>
                <EditForm onSubmit={handleSubmit(onSubmit)}>
                    <EditTable>
                        <EditTr>
                            <EditTd>이름</EditTd>
                            <EditTd>김상아</EditTd>
                        </EditTr>
                        <EditTr>
                            <EditTd>아이디</EditTd>
                            <EditTd>rlatkddk3073</EditTd>
                        </EditTr>
                        <EditTr>
                            <EditTd>비밀번호 변경</EditTd>
                            <EditTd>
                                <Controller
                                    as={Input}
                                    name="password"
                                    control={control}
                                    defaultValue=""
                                    rules={{
                                        required: "비밀번호는 필수입니다.",
                                    }}
                                    render={({ field }) => (
                                        <Input
                                            type="password"
                                            placeholder="PASSWORD"
                                            {...field}
                                        />
                                    )}
                                />
                            </EditTd>
                        </EditTr>
                        <EditTr>
                            <EditTd>비밀번호 확인</EditTd>
                            <EditTd>
                                <Controller
                                    as={Input}
                                    name="passwordChk"
                                    control={control}
                                    defaultValue=""
                                    rules={{
                                        required: "비밀번호 확인은 필수입니다.",
                                    }}
                                    render={({ field }) => (
                                        <Input
                                            type="password"
                                            placeholder="PASSWORD"
                                            {...field}
                                        />
                                    )}
                                />
                            </EditTd>
                        </EditTr>
                        <EditTr>
                            <EditTd>전화번호</EditTd>
                            <EditTd>
                                <Controller
                                    as={Input}
                                    name="phone"
                                    control={control}
                                    defaultValue=""
                                    rules={{
                                        required: "전화번호는 필수입니다.",
                                    }}
                                    render={({ field }) => (
                                        <Input
                                            {...field}
                                            type="text"
                                            placeholder="01012345678"
                                            onChange={(e) => {
                                                handlePhoneChange(e);
                                                field.onChange(e);
                                            }}
                                        />
                                    )}
                                />
                            </EditTd>
                        </EditTr>
                    </EditTable>
                    <SubmitButton>수정하기</SubmitButton>
                </EditForm>
            </EditWrap>
        </>
    );
}

export default MyPage;

const WrapName = styled.p`
    font-size: 2.4rem;
    color: ${textColor};
    margin-bottom: 25px;

    ${media.tablet`
        font-size: 2.2rem;
    `}

    ${media.mobile`
        font-size: 2rem;
        margin-bottom: 15px;
    `}
`;

const ProfileWrap = styled.div`
    width: 1280px;
    margin: 50px auto 0 auto;

    ${media.tablet`
        width: 100%;
        padding: 0 30px;
    `}

    ${media.mobile`
        margin-top: 80px;
        padding: 0 20px;
    `}
`;

const ProfileBox = styled.div`
    display: flex;
    border: 1px solid #aaa;
    border-radius: 5px;
    padding: 30px;

    ${media.mobile`
        padding: 15px;
    `}
`;

const ProfilePicture = styled.div`
    width: 120px;
    height: 120px;
    margin-right: 50px;

    ${media.mobile`
        width: 80px;
        height: 80px;
        margin-right: 20px;
    `}
`;

const ProfilePictureImage = styled.div`
    width: 100%;
    height: 100%;
    background-image: url("https://kr.object.ncloudstorage.com/elderlinker/user-default.png");
    background-size: cover;
`;

const ProfileInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 120px;

    ${media.mobile`
        height: 80px;
    `}
`;

const ProfileText = styled.p`
    font-size: 2rem;

    ${media.mobile`
        font-size: 1.6rem;
    `}
`;

const ProfileName = styled.span``;

const ProfileButton = styled.button`
    width: 160px;
    font-size: 1.3rem;
    background-color: transparent;
    border: 1px solid #aaa;
    border-radius: 10px;
    padding: 5px 0;

    ${media.mobile`
        width: 130px;
        font-size: 1.2rem;
    `}
`;

const BadgeWrap = styled.div`
    width: 100%;
    background-color: #fffdf1;
    text-align: center;
    margin: 50px 0;
    padding: 60px 0 100px 0;

    ${media.tablet`
        padding: 40px 0 60px 0;
    `}

    ${media.mobile`
        margin: 40px 0;
        padding: 40px 0 60px 0;
    `}
`;

const BadgeTitle = styled.span`
    color: #fff;
    font-size: 2.6rem;
    font-weight: 500;
    background-color: #e396a5;
    padding: 10px 40px;
    border-radius: 30px;

    ${media.tablet`
        font-size: 2.2rem;
    `}

    ${media.mobile`
        font-size: 1.8rem;
        padding: 10px 30px;
    `}
`;

const BadgeBoxWrap = styled.div`
    display: flex;
    justify-content: space-between;
    width: 1280px;
    margin: 70px auto 0 auto;
    padding: 0 50px;

    ${media.tablet`
        width: 100%;
        padding: 0 30px;
        margin: 50px auto 0 auto;
    `}

    ${media.mobile`
        padding: 0 20px;
        margin: 40px auto 0 auto;
    `}
`;

const BadgeBox = styled.div`
    width: 230px;
    height: 230px;
    border-radius: 50%;
    background-image: url("https://kr.object.ncloudstorage.com/elderlinker/badge-default.png");
    background-size: cover;

    ${media.tablet`
        width: 150px;
        height: 150px;
    `}

    ${media.mobile`
        width: 80px;
        height: 80px;
    `}
`;

const EditWrap = styled.div`
    width: 1280px;
    margin: 0 auto 80px auto;

    ${media.tablet`
        width: 100%;
        padding: 0 30px;
        margin: 0 auto 70px auto;
    `}

    ${media.mobile`
        padding: 0 20px;
        margin: 0 auto 50px auto;
    `}
`;

const EditForm = styled.form`
    width: 100%;
    text-align: center;
`;

const EditTable = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    border-top: 2px solid #ccc;

    ${media.mobile`
        font-size: 1.4rem;
    `}
`;

const EditTr = styled.div`
    width: 100%;
    border-bottom: 1px solid #ccc;
    padding: 5px 0;
`;

const EditTd = styled.div`
    display: flex;
    align-items: center;
    height: 50px;
    float: left;

    &:first-of-type {
        width: 180px;
        justify-content: center;
        border-right: 1px solid #ccc;
    }

    &:last-of-type {
        width: calc(100% - 180px);
        padding-left: 40px;
    }

    ${media.mobile`
        &:first-of-type {
            width: 100px;
        }

        &:last-of-type {
            width: calc(100% - 100px);
            padding-left: 20px;
        }
    `}
`;

const Input = styled.input`
    border: 1px solid #aaa;
    border-radius: 5px;
    padding: 0 10px;

    ${media.mobile`
        font-size: 1.4rem;
    `}
`;

const SubmitButton = styled.button`
    background-color: transparent;
    border: 1px solid #aaa;
    border-radius: 10px;
    margin-top: 30px;
    padding: 10px 20px;

    ${media.mobile`
        font-size: 1.4rem;
        padding: 10px 15px;
    `}
`;
