import { FunctionComponent, useState, useCallback } from "react";
import Settings4 from "../components/Settings4";
import PortalPopup from "../components/PortalPopup";
import styled from "styled-components";

const KnowleeLogoWhiteTaglinesvgIcon = styled.img`
  position: relative;
  width: 144px;
  height: 40px;
  overflow: hidden;
  flex-shrink: 0;
`;
const CollapseIconChild = styled.div`
  position: absolute;
  top: 2px;
  left: 2px;
  border-radius: var(--br-10xs-5);
  background-color: var(--neutral-60);
  width: 20px;
  height: 20px;
`;
const CollapseIconItem = styled.div`
  position: absolute;
  top: 4px;
  left: 4px;
  border-radius: var(--br-11xs);
  background-color: var(--neutral-90);
  width: 8px;
  height: 16px;
`;
const CollapseIcon = styled.div`
  position: relative;
  width: 24px;
  height: 24px;
  overflow: hidden;
  flex-shrink: 0;
`;
const LogoTop = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 320px;
  display: flex;
  flex-direction: row;
  padding: var(--padding-21xl) var(--padding-5xl);
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
`;
const CollapseIcon1 = styled.img`
  position: relative;
  width: 24px;
  height: 24px;
  overflow: hidden;
  flex-shrink: 0;
`;
const Dashboard = styled.div`
  flex: 1;
  position: relative;
  line-height: 24px;
`;
const SidebarMenuItem = styled.div`
  border-radius: var(--br-5xs);
  width: 288px;
  display: flex;
  flex-direction: row;
  padding: var(--padding-xs) var(--padding-xl);
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-xl);
`;
const CommunityAndSupport11 = styled.div`
  flex: 1;
  position: relative;
  line-height: 24px;
  font-weight: 500;
`;
const SidebarMenuItem3 = styled.div`
  border-radius: var(--br-5xs);
  background: linear-gradient(
    -90deg,
    rgba(48, 44, 57, 0.8),
    rgba(81, 70, 111, 0.9)
  );
  width: 288px;
  display: flex;
  flex-direction: row;
  padding: var(--padding-xs) var(--padding-xl);
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-xl);
  color: var(--color-whitesmoke-100);
`;
const SidebarMenuItem4 = styled.div`
  align-self: stretch;
  border-radius: var(--br-5xs);
  display: flex;
  flex-direction: row;
  padding: var(--padding-xs) var(--padding-xl);
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-xl);
`;
const SidebarMenuItem5 = styled.div`
  align-self: stretch;
  border-radius: var(--br-5xs);
  display: flex;
  flex-direction: row;
  padding: var(--padding-xs) var(--padding-xl);
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-xl);
  cursor: pointer;
`;
const SidebarMenuItemParent = styled.div`
  position: absolute;
  top: 136px;
  left: 0px;
  display: flex;
  flex-direction: column;
  padding: var(--padding-base);
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-9xs);
`;
const SidebarUserChild = styled.img`
  position: relative;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  object-fit: cover;
`;
const JenniferLinton = styled.div`
  position: relative;
  line-height: 24px;
  font-weight: 500;
`;
const Free = styled.div`
  border-radius: var(--br-5xs);
  background-color: var(--color-goldenrod);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: 0px var(--padding-xs);
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: var(--body-sm-medium-size);
  color: var(--neutral-90);
`;
const JenniferLintonParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const SidebarUserInner = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
const SidebarUser = styled.div`
  flex: 1;
  border-radius: var(--br-xs);
  width: 264px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: var(--padding-3xs);
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-xs);
`;
const FileIcon = styled.img`
  position: relative;
  width: 20px;
  height: 20px;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
`;
const ButtonOutline = styled.div`
  align-self: stretch;
  border-radius: var(--br-3xs);
  border: 2px solid var(--neutral-70);
  display: flex;
  flex-direction: row;
  padding: var(--padding-xs) var(--padding-5xl);
  align-items: center;
  justify-content: center;
  gap: var(--gap-5xs);
`;
const Userfree = styled.div`
  position: absolute;
  top: 792px;
  left: 16px;
  border-radius: var(--br-xs);
  background-color: var(--neutral-06-100);
  box-shadow: 0px 20px 24px rgba(0, 0, 0, 0.5);
  width: 288px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: var(--padding-3xs);
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-5xs);
  color: var(--neutral-01-100);
`;
const SunIcon = styled.img`
  position: relative;
  width: 24px;
  height: 24px;
`;
const Light = styled.div`
  position: relative;
  line-height: 20px;
  font-weight: 500;
`;
const ToggleItem = styled.div`
  flex: 1;
  border-radius: var(--br-3xs);
  background-color: var(--neutral-07-100);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: var(--padding-5xs) var(--padding-base);
  align-items: center;
  justify-content: center;
  gap: var(--gap-xs);
`;
const ToggleItem1 = styled.div`
  flex: 1;
  border-radius: var(--br-3xs);
  display: flex;
  flex-direction: row;
  padding: var(--padding-5xs) var(--padding-base);
  align-items: center;
  justify-content: center;
  gap: var(--gap-xs);
  color: var(--neutral-60);
`;
const ThemeTogglelight = styled.div`
  position: absolute;
  top: 952px;
  left: 16px;
  border-radius: var(--br-xs);
  background-color: var(--neutral-06-100);
  border: 1px solid var(--neutral-06-50);
  box-sizing: border-box;
  width: 288px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: var(--padding-9xs);
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: var(--body-sm-medium-size);
  color: var(--neutral-03-100);
`;
const LeftMenu1 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: var(--neutral-100);
  width: 320px;
  height: 1024px;
  overflow: hidden;
`;
const Tab = styled.div`
  border-radius: var(--br-31xl);
  background-color: var(--primary-50);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: var(--padding-5xs) var(--padding-xl);
  align-items: center;
  justify-content: center;
`;
const Updates1 = styled.div`
  position: relative;
  line-height: 24px;
`;
const Tab1 = styled.div`
  border-radius: var(--br-31xl);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: var(--padding-5xs) var(--padding-xl);
  align-items: center;
  justify-content: center;
  color: var(--neutral-60);
`;
const TabParent = styled.div`
  position: absolute;
  top: 120px;
  left: 80px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xs);
  text-align: left;
  color: var(--neutral-01-100);
`;
const CommunityAndSupport2 = styled.div`
  position: absolute;
  top: calc(50% - 14px);
  left: 40px;
  line-height: 28px;
  font-weight: 500;
`;
const TtleBar = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-xl) var(--br-xl) 0px 0px;
  background-color: var(--neutral-01-100);
  border-bottom: 1px solid var(--neutral-03-100);
  box-sizing: border-box;
  width: 1096px;
  height: 72px;
  overflow: hidden;
  text-align: left;
  font-size: var(--h5-medium-size);
  color: var(--neutral-100);
`;
const TwitterKnowleesAccount = styled.div`
  position: absolute;
  top: 128px;
  left: calc(50% - 94px);
  line-height: 24px;
  font-weight: 500;
`;
const SocialIcon = styled.img`
  position: absolute;
  top: 32px;
  left: calc(50% - 40px);
  width: 80px;
  height: 80px;
  overflow: hidden;
`;
const TwitterKnowleesAccountParent = styled.div`
  position: absolute;
  top: 200px;
  left: 80px;
  border-radius: var(--br-xl);
  background-color: var(--neutral-02-50);
  width: 216px;
  height: 184px;
  overflow: hidden;
`;
const Guides = styled.div`
  position: absolute;
  top: 128px;
  left: calc(50% - 26px);
  line-height: 24px;
  font-weight: 500;
`;
const GuidesParent = styled.div`
  position: absolute;
  top: 408px;
  left: 80px;
  border-radius: var(--br-xl);
  background-color: var(--neutral-02-50);
  width: 216px;
  height: 184px;
  overflow: hidden;
`;
const Discord = styled.div`
  position: absolute;
  top: 128px;
  left: calc(50% - 28px);
  line-height: 24px;
  font-weight: 500;
`;
const DiscordParent = styled.div`
  position: absolute;
  top: 200px;
  left: 560px;
  border-radius: var(--br-xl);
  background-color: var(--neutral-02-50);
  width: 216px;
  height: 184px;
  overflow: hidden;
`;
const Telegram = styled.div`
  position: absolute;
  top: 128px;
  left: calc(50% - 35px);
  line-height: 24px;
  font-weight: 500;
`;
const TelegramParent = styled.div`
  position: absolute;
  top: 200px;
  left: 800px;
  border-radius: var(--br-xl);
  background-color: var(--neutral-02-50);
  width: 216px;
  height: 184px;
  overflow: hidden;
`;
const Docs = styled.div`
  position: absolute;
  top: 128px;
  left: calc(50% - 19px);
  line-height: 24px;
  font-weight: 500;
`;
const SocialIcon4 = styled.img`
  position: absolute;
  height: 43.48%;
  top: 17.39%;
  bottom: 39.13%;
  left: calc(50% - 40px);
  max-height: 100%;
  width: 80px;
  overflow: hidden;
`;
const DocsParent = styled.div`
  position: absolute;
  top: 408px;
  left: 560px;
  border-radius: var(--br-xl);
  background-color: var(--neutral-02-50);
  width: 216px;
  height: 184px;
  overflow: hidden;
`;
const Medium = styled.div`
  position: absolute;
  top: 128px;
  left: calc(50% - 30px);
  line-height: 24px;
  font-weight: 500;
`;
const MediumParent = styled.div`
  position: absolute;
  top: 200px;
  left: 320px;
  border-radius: var(--br-xl);
  background-color: var(--neutral-02-50);
  width: 216px;
  height: 184px;
  overflow: hidden;
`;
const Tutorials = styled.div`
  position: absolute;
  top: 128px;
  left: calc(50% - 32px);
  line-height: 24px;
  font-weight: 500;
`;
const SocialChild = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  border-radius: var(--br-3xs);
  background-color: #45b058;
  overflow: hidden;
`;
const SocialIcon1 = styled.div`
  position: absolute;
  top: 32px;
  left: calc(50% - 40px);
  width: 80px;
  height: 80px;
  overflow: hidden;
`;
const FrameIcon = styled.img`
  position: absolute;
  top: calc(50% - 43px);
  left: calc(50% - 23px);
  width: 45.33px;
  height: 45.33px;
  overflow: hidden;
`;
const TutorialsParent = styled.div`
  position: absolute;
  top: 408px;
  left: 320px;
  border-radius: var(--br-xl);
  background-color: var(--neutral-02-50);
  width: 216px;
  height: 184px;
  overflow: hidden;
`;
const Subsription = styled.div`
  position: absolute;
  top: 24px;
  left: 0px;
  border-radius: var(--br-xl);
  background-color: var(--neutral-01-100);
  width: 1096px;
  height: 976px;
`;
const WorkSpace = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  background-color: var(--neutral-100);
  width: 1120px;
  height: 1024px;
  overflow: hidden;
  text-align: center;
  color: var(--primary-100);
`;
const CommunityAndSupportRoot = styled.div`
  position: relative;
  border-radius: var(--br-xl);
  background-color: var(--neutral-100);
  width: 100%;
  height: 1024px;
  overflow: hidden;
  text-align: left;
  font-size: var(--body-regula-size);
  color: var(--neutral-40);
  font-family: var(--body-regula);
`;
const CommunityAndSupport1: FunctionComponent = () => {
  const [isSettingsPopupOpen, setSettingsPopupOpen] = useState(false);

  const openSettingsPopup = useCallback(() => {
    setSettingsPopupOpen(true);
  }, []);

  const closeSettingsPopup = useCallback(() => {
    setSettingsPopupOpen(false);
  }, []);

  return (
    <>
      <CommunityAndSupportRoot>
        <LeftMenu1>
          <LogoTop>
            <KnowleeLogoWhiteTaglinesvgIcon
              alt=""
              src="/knowlee-logo-white-taglinesvg4.svg"
            />
            <CollapseIcon>
              <CollapseIconChild />
              <CollapseIconItem />
            </CollapseIcon>
          </LogoTop>
          <SidebarMenuItemParent>
            <SidebarMenuItem>
              <CollapseIcon1 alt="" src="/dashboard5.svg" />
              <Dashboard>Dashboard</Dashboard>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <CollapseIcon1 alt="" src="/feed-the-brain4.svg" />
              <Dashboard>Feed the Brain</Dashboard>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <CollapseIcon1 alt="" src="/knowlee-chats3.svg" />
              <Dashboard>Knowlee Chats</Dashboard>
            </SidebarMenuItem>
            <SidebarMenuItem3>
              <CollapseIcon1 alt="" src="/help.svg" />
              <CommunityAndSupport11>
                Community and Support
              </CommunityAndSupport11>
            </SidebarMenuItem3>
            <SidebarMenuItem4>
              <CollapseIcon1 alt="" src="/card.svg" />
              <Dashboard>Manage subscription</Dashboard>
            </SidebarMenuItem4>
            <SidebarMenuItem5 onClick={openSettingsPopup}>
              <CollapseIcon1 alt="" src="/settings11.svg" />
              <Dashboard>Settings</Dashboard>
            </SidebarMenuItem5>
          </SidebarMenuItemParent>
          <Userfree>
            <SidebarUser>
              <SidebarUserChild alt="" src="/ellipse-2@2x.png" />
              <SidebarUserInner>
                <JenniferLintonParent>
                  <JenniferLinton>Jennifer Linton</JenniferLinton>
                  <Free>
                    <JenniferLinton>Beta</JenniferLinton>
                  </Free>
                </JenniferLintonParent>
              </SidebarUserInner>
            </SidebarUser>
            <ButtonOutline>
              <FileIcon alt="" src="/file5.svg" />
              <JenniferLinton>Invite friends</JenniferLinton>
            </ButtonOutline>
          </Userfree>
          <ThemeTogglelight>
            <ToggleItem>
              <SunIcon alt="" src="/sun.svg" />
              <Light>Light</Light>
            </ToggleItem>
            <ToggleItem1>
              <CollapseIcon1 alt="" src="/moon011.svg" />
              <Light>Dark</Light>
            </ToggleItem1>
          </ThemeTogglelight>
        </LeftMenu1>
        <WorkSpace>
          <Subsription>
            <TabParent>
              <Tab>
                <JenniferLinton>Community</JenniferLinton>
              </Tab>
              <Tab1>
                <Updates1>Support</Updates1>
              </Tab1>
            </TabParent>
            <TtleBar>
              <CommunityAndSupport2>Community and Support</CommunityAndSupport2>
            </TtleBar>
            <TwitterKnowleesAccountParent>
              <TwitterKnowleesAccount>
                Twitter Knowlee's account
              </TwitterKnowleesAccount>
              <SocialIcon alt="" src="/social4.svg" />
            </TwitterKnowleesAccountParent>
            <GuidesParent>
              <Guides>Guides</Guides>
              <SocialIcon alt="" src="/social5.svg" />
            </GuidesParent>
            <DiscordParent>
              <Discord>Discord</Discord>
              <SocialIcon alt="" src="/social6.svg" />
            </DiscordParent>
            <TelegramParent>
              <Telegram>Telegram</Telegram>
              <SocialIcon alt="" src="/social7.svg" />
            </TelegramParent>
            <DocsParent>
              <Docs>Docs</Docs>
              <SocialIcon4 alt="" src="/social8.svg" />
            </DocsParent>
            <MediumParent>
              <Medium>Medium</Medium>
              <SocialIcon alt="" src="/social9.svg" />
            </MediumParent>
            <TutorialsParent>
              <Tutorials>Tutorials</Tutorials>
              <SocialIcon1>
                <SocialChild />
              </SocialIcon1>
              <FrameIcon alt="" src="/frame2.svg" />
            </TutorialsParent>
          </Subsription>
        </WorkSpace>
      </CommunityAndSupportRoot>
      {isSettingsPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSettingsPopup}
        >
          <Settings4 onClose={closeSettingsPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default CommunityAndSupport1;
