import { FunctionComponent } from "react";
import styled from "styled-components";

const UserFillIcon = styled.img`
  position: relative;
  width: 20px;
  height: 20px;
  overflow: hidden;
  flex-shrink: 0;
`;
const Menu = styled.div`
  position: relative;
  line-height: 20px;
  font-weight: 500;
`;
const MenuItem = styled.div`
  border-radius: var(--br-29xl);
  border: 2px solid var(--primary-50);
  box-sizing: border-box;
  width: 212px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: var(--padding-3xs) var(--padding-base);
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-xs);
  color: var(--neutral-100);
`;
const MenuItem1 = styled.div`
  width: 212px;
  display: flex;
  flex-direction: row;
  padding: var(--padding-3xs) var(--padding-base);
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-xs);
`;
const SettingsMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-9xs);
`;
const SettingSidebar = styled.div`
  width: 212px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const EditProfile = styled.b`
  align-self: stretch;
  position: relative;
  letter-spacing: -0.01em;
  line-height: 56px;
`;
const FrameChild = styled.img`
  position: relative;
  border-radius: 50%;
  width: 112px;
  height: 112px;
  object-fit: cover;
`;
const FileIcon = styled.img`
  position: relative;
  width: 20px;
  height: 20px;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
`;
const Add = styled.div`
  position: relative;
  line-height: 24px;
  font-weight: 500;
`;
const ButtonOutline = styled.div`
  border-radius: var(--br-3xs);
  border: 2px solid var(--neutral-30);
  box-sizing: border-box;
  width: 186px;
  display: flex;
  flex-direction: row;
  padding: var(--padding-xs) var(--padding-5xl);
  align-items: center;
  justify-content: center;
  gap: var(--gap-5xs);
`;
const JpgOrPng = styled.p`
  margin: 0;
`;
const AtLeast800x800Container = styled.div`
  align-self: stretch;
  position: relative;
  font-size: var(--body-sm-medium-size);
  line-height: 20px;
  font-weight: 500;
  color: var(--neutral-60);
`;
const ButtonOutlineParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-base);
`;
const EllipseParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-base);
  text-align: left;
  font-size: var(--body-regula-size);
  color: var(--neutral-90);
`;
const Avatar = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xs);
  text-align: center;
`;
const Email = styled.div`
  align-self: stretch;
  position: relative;
  line-height: 20px;
  font-weight: 500;
`;
const EmailFillIcon = styled.img`
  position: relative;
  width: 24px;
  height: 24px;
  overflow: hidden;
  flex-shrink: 0;
`;
const EnterEmailAddress = styled.div`
  position: relative;
  line-height: 24px;
`;
const UserFillParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-xs);
`;
const EmailIcon = styled.img`
  position: relative;
  width: 24px;
  height: 24px;
  overflow: hidden;
  flex-shrink: 0;
  opacity: 0;
`;
const Input = styled.div`
  align-self: stretch;
  border-radius: var(--br-3xs);
  background-color: var(--color-whitesmoke-100);
  border: 1px solid var(--neutral-30);
  display: flex;
  flex-direction: row;
  padding: var(--padding-sm) var(--padding-base);
  align-items: center;
  justify-content: space-between;
  text-align: center;
  font-size: var(--body-regula-size);
`;
const Name1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const Div = styled.div`
  position: relative;
  line-height: 20px;
  font-weight: 500;
  color: var(--neutral-50);
`;
const BioParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;
const Input2 = styled.div`
  align-self: stretch;
  border-radius: var(--br-3xs);
  background-color: var(--color-whitesmoke-100);
  border: 1px solid var(--neutral-30);
  box-sizing: border-box;
  height: 96px;
  display: flex;
  flex-direction: row;
  padding: var(--padding-xs) var(--padding-base);
  align-items: flex-start;
  justify-content: space-between;
  text-align: center;
  font-size: var(--body-regula-size);
  color: var(--neutral-60);
`;
const AvatarParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
`;
const AddIcon = styled.img`
  position: relative;
  width: 24px;
  height: 24px;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
`;
const Button = styled.div`
  align-self: stretch;
  border-radius: var(--br-3xs);
  background-color: var(--primary-50);
  display: flex;
  flex-direction: row;
  padding: var(--padding-xs) 0px;
  align-items: center;
  justify-content: center;
  gap: var(--gap-xs);
  text-align: center;
  font-size: var(--body-regula-size);
  color: var(--neutral-01-100);
`;
const EditProfile1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-13xl);
  font-size: var(--body-sm-medium-size);
`;
const EditProfileon = styled.div`
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-13xl);
  text-align: left;
  font-size: var(--h3-bold-size);
  color: var(--neutral-100);
`;
const SettingsModalRoot = styled.div`
  position: absolute;
  top: calc(50% - 400px);
  left: calc(50% - 384px);
  border-radius: var(--br-5xl);
  background-color: var(--neutral-01-100);
  width: 768px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: var(--padding-29xl);
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-29xl);
  text-align: center;
  font-size: var(--body-sm-medium-size);
  color: var(--neutral-60);
  font-family: var(--body-regula);
`;
const SettingsModal: FunctionComponent = () => {
  return (
    <SettingsModalRoot>
      <SettingSidebar>
        <SettingsMenu>
          <MenuItem>
            <UserFillIcon alt="" src="/user-fill6.svg" />
            <Menu>Edit profile</Menu>
          </MenuItem>
          <MenuItem1>
            <UserFillIcon alt="" src="/lock-fill2.svg" />
            <Menu>Password</Menu>
          </MenuItem1>
          <MenuItem1>
            <UserFillIcon alt="" src="/bel3.svg" />
            <Menu>Notifications</Menu>
          </MenuItem1>
          <MenuItem1>
            <UserFillIcon alt="" src="/settings7.svg" />
            <Menu>Preferences Settings</Menu>
          </MenuItem1>
          <MenuItem1>
            <UserFillIcon alt="" src="/info2.svg" />
            <Menu>Action</Menu>
          </MenuItem1>
        </SettingsMenu>
      </SettingSidebar>
      <EditProfileon>
        <EditProfile>Edit profile</EditProfile>
        <EditProfile1>
          <AvatarParent>
            <Avatar>
              <Menu>Avatar</Menu>
              <EllipseParent>
                <FrameChild alt="" src="/ellipse-21@2x.png" />
                <ButtonOutlineParent>
                  <ButtonOutline>
                    <FileIcon alt="" src="/file5.svg" />
                    <Add>Upload new image</Add>
                  </ButtonOutline>
                  <AtLeast800x800Container>
                    <JpgOrPng>At least 800x800 px recommended.</JpgOrPng>
                    <JpgOrPng>JPG or PNG and GIF is allowed</JpgOrPng>
                  </AtLeast800x800Container>
                </ButtonOutlineParent>
              </EllipseParent>
            </Avatar>
            <Name1>
              <Email>Name</Email>
              <Input>
                <UserFillParent>
                  <EmailFillIcon alt="" src="/user-fill4.svg" />
                  <EnterEmailAddress>Jennifer Linton</EnterEmailAddress>
                </UserFillParent>
                <EmailIcon alt="" src="/email1.svg" />
              </Input>
            </Name1>
            <Name1>
              <Email>Email</Email>
              <Input>
                <UserFillParent>
                  <EmailFillIcon alt="" src="/email-fill.svg" />
                  <EnterEmailAddress>jenlinton1994@gmail.com</EnterEmailAddress>
                </UserFillParent>
                <EmailIcon alt="" src="/email1.svg" />
              </Input>
            </Name1>
            <Name1>
              <BioParent>
                <Menu>Bio</Menu>
                <Div>880</Div>
              </BioParent>
              <Input2>
                <UserFillParent>
                  <EmailFillIcon alt="" src="/person-done.svg" />
                  <EnterEmailAddress>Short bio</EnterEmailAddress>
                </UserFillParent>
                <EmailIcon alt="" src="/email1.svg" />
              </Input2>
            </Name1>
          </AvatarParent>
          <Button>
            <AddIcon alt="" src="/add1.svg" />
            <Add>Save changes</Add>
          </Button>
        </EditProfile1>
      </EditProfileon>
    </SettingsModalRoot>
  );
};

export default SettingsModal;
