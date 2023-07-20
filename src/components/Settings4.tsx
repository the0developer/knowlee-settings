import { FunctionComponent } from "react";
import styled from "styled-components";
import SettingsModal from "./SettingsModal";

type Settings4Type = {
  onClose?: () => void;
};

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
const FeedTheBrain1 = styled.div`
  flex: 1;
  position: relative;
  line-height: 24px;
  font-weight: 500;
`;
const SidebarMenuItem1 = styled.div`
  border-radius: var(--br-5xs);
  background: linear-gradient(-90deg, #323337, rgba(97, 92, 66, 0.5));
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
const SocialIcon = styled.img`
  position: relative;
  width: 60px;
  height: 60px;
  overflow: hidden;
  flex-shrink: 0;
`;
const AppName = styled.div`
  align-self: stretch;
  position: relative;
  line-height: 24px;
  font-weight: 500;
`;
const AppNameWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const SocialParent = styled.div`
  align-self: stretch;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-base);
`;
const AddIcon = styled.img`
  position: relative;
  width: 20px;
  height: 20px;
  overflow: hidden;
  flex-shrink: 0;
`;
const ButtonOutline1 = styled.div`
  align-self: stretch;
  border-radius: var(--br-3xs);
  border: 2px solid var(--neutral-30);
  display: flex;
  flex-direction: row;
  padding: var(--padding-xs) var(--padding-5xl);
  align-items: center;
  justify-content: center;
  gap: var(--gap-5xs);
`;
const AppSource = styled.div`
  border-radius: var(--br-xs);
  background-color: var(--neutral-01-100);
  border: 1px solid var(--neutral-20);
  box-sizing: border-box;
  width: 242px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  padding: var(--padding-xl) var(--padding-5xl);
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-xl);
`;
const AppSourceParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-base);
`;
const SocialParent1 = styled.div`
  align-self: stretch;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-base);
  opacity: 0.4;
`;
const AppSource4 = styled.div`
  border-radius: var(--br-xs);
  background-color: var(--color-gray-200);
  border: 1px solid var(--neutral-20);
  box-sizing: border-box;
  width: 242px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  padding: var(--padding-xl) var(--padding-5xl);
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-xl);
  text-align: left;
`;
const SocialIcon5 = styled.img`
  position: relative;
  width: 60px;
  height: 60px;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
`;
const ButtonOutline6 = styled.div`
  align-self: stretch;
  border-radius: var(--br-3xs);
  border: 2px solid var(--neutral-30);
  display: flex;
  flex-direction: row;
  padding: var(--padding-xs) var(--padding-5xl);
  align-items: center;
  justify-content: center;
  gap: var(--gap-5xs);
  text-align: left;
`;
const AppSourceGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-base);
  text-align: center;
`;
const FrameParent = styled.div`
  position: absolute;
  top: 217px;
  left: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
  color: var(--neutral-90);
`;
const SearchByName = styled.div`
  position: relative;
  line-height: 24px;
`;
const SearchParent = styled.div`
  position: absolute;
  top: 89px;
  left: calc(50% - 508px);
  border-radius: var(--br-3xs);
  background-color: var(--neutral-20);
  width: 1016px;
  display: flex;
  flex-direction: row;
  padding: var(--padding-xs) var(--padding-base);
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-xs);
  text-align: center;
`;
const SuggestedSources = styled.div`
  position: absolute;
  top: 169px;
  left: 40px;
  line-height: 24px;
  font-weight: 500;
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
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xs);
`;
const SmallButton = styled.div`
  border-radius: var(--br-3xs);
  background-color: var(--neutral-90);
  display: flex;
  flex-direction: row;
  padding: var(--padding-5xs) var(--padding-base);
  align-items: center;
  justify-content: center;
  gap: var(--gap-5xs);
`;
const FrameGroup = styled.div`
  position: absolute;
  top: 25px;
  left: 40px;
  width: 1016px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: var(--neutral-01-100);
`;
const Dashboard1 = styled.div`
  position: absolute;
  top: 95px;
  left: 0px;
  border-radius: 0px 0px var(--br-xl) var(--br-xl);
  background-color: var(--neutral-01-100);
  border-right: 1px solid var(--neutral-03-100);
  box-sizing: border-box;
  width: 1096px;
  height: 905px;
`;
const FeedTheBrain2 = styled.div`
  position: absolute;
  top: calc(50% - 14px);
  left: 40px;
  line-height: 28px;
  font-weight: 500;
`;
const TtleBar = styled.div`
  position: absolute;
  top: 24px;
  left: 0px;
  border-radius: var(--br-xl) var(--br-xl) 0px 0px;
  background-color: var(--neutral-01-100);
  border-bottom: 1px solid var(--neutral-03-100);
  box-sizing: border-box;
  width: 1096px;
  height: 72px;
  overflow: hidden;
  font-size: var(--h5-medium-size);
  color: var(--neutral-100);
`;
const WorkSpace = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  background-color: var(--neutral-100);
  width: 1120px;
  height: 1024px;
  overflow: hidden;
  color: var(--neutral-60);
`;
const Overlay = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: var(--color-gray-100);
  width: 1440px;
  height: 1024px;
`;
const SettingsRoot = styled.div`
  position: relative;
  border-radius: var(--br-xl);
  background-color: var(--color-white);
  width: 1440px;
  height: 1024px;
  overflow: hidden;
  max-width: 100%;
  max-height: 100%;
  text-align: left;
  font-size: var(--body-regula-size);
  color: var(--neutral-40);
  font-family: var(--body-regula);
`;
const Settings4: FunctionComponent<Settings4Type> = ({ onClose }) => {
  return (
    <SettingsRoot>
      <LeftMenu1>
        <LogoTop>
          <KnowleeLogoWhiteTaglinesvgIcon
            alt=""
            src="/knowlee-logo-white-taglinesvg3.svg"
          />
          <CollapseIcon>
            <CollapseIconChild />
            <CollapseIconItem />
          </CollapseIcon>
        </LogoTop>
        <SidebarMenuItemParent>
          <SidebarMenuItem>
            <CollapseIcon1 alt="" src="/dashboard4.svg" />
            <Dashboard>Dashboard</Dashboard>
          </SidebarMenuItem>
          <SidebarMenuItem1>
            <CollapseIcon1 alt="" src="/feed-the-brain3.svg" />
            <FeedTheBrain1>Feed the Brain</FeedTheBrain1>
          </SidebarMenuItem1>
          <SidebarMenuItem>
            <CollapseIcon1 alt="" src="/knowlee-chats3.svg" />
            <Dashboard>Knowlee Chats</Dashboard>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <CollapseIcon1 alt="" src="/help.svg" />
            <Dashboard>Community and Support</Dashboard>
          </SidebarMenuItem>
          <SidebarMenuItem4>
            <CollapseIcon1 alt="" src="/card.svg" />
            <Dashboard>Manage subscription</Dashboard>
          </SidebarMenuItem4>
          <SidebarMenuItem4>
            <CollapseIcon1 alt="" src="/settings9.svg" />
            <Dashboard>Settings</Dashboard>
          </SidebarMenuItem4>
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
        <Dashboard1>
          <FrameParent>
            <AppSourceParent>
              <AppSource>
                <SocialParent>
                  <SocialIcon alt="" src="/social1.svg" />
                  <AppNameWrapper>
                    <AppName>Twitter</AppName>
                  </AppNameWrapper>
                </SocialParent>
                <ButtonOutline1>
                  <AddIcon alt="" src="/add5.svg" />
                  <JenniferLinton>Add</JenniferLinton>
                </ButtonOutline1>
              </AppSource>
              <AppSource>
                <SocialParent>
                  <SocialIcon alt="" src="/property-1medium.svg" />
                  <AppNameWrapper>
                    <AppName>Medium</AppName>
                  </AppNameWrapper>
                </SocialParent>
                <ButtonOutline1>
                  <AddIcon alt="" src="/add5.svg" />
                  <JenniferLinton>Add</JenniferLinton>
                </ButtonOutline1>
              </AppSource>
              <AppSource>
                <SocialParent>
                  <SocialIcon alt="" src="/property-1pdf.svg" />
                  <AppNameWrapper>
                    <AppName>PDF</AppName>
                  </AppNameWrapper>
                </SocialParent>
                <ButtonOutline1>
                  <AddIcon alt="" src="/add5.svg" />
                  <JenniferLinton>Add</JenniferLinton>
                </ButtonOutline1>
              </AppSource>
              <AppSource>
                <SocialParent>
                  <SocialIcon alt="" src="/property-1csv.svg" />
                  <AppNameWrapper>
                    <AppName>CSV</AppName>
                  </AppNameWrapper>
                </SocialParent>
                <ButtonOutline1>
                  <AddIcon alt="" src="/add5.svg" />
                  <JenniferLinton>Add</JenniferLinton>
                </ButtonOutline1>
              </AppSource>
            </AppSourceParent>
            <AppSourceGroup>
              <AppSource4>
                <SocialParent1>
                  <SocialIcon alt="" src="/property-1youtube.svg" />
                  <AppNameWrapper>
                    <AppName>YouTube</AppName>
                  </AppNameWrapper>
                </SocialParent1>
                <ButtonOutline1>
                  <AddIcon alt="" src="/lock3.svg" />
                  <JenniferLinton>Unlock</JenniferLinton>
                </ButtonOutline1>
              </AppSource4>
              <AppSource>
                <SocialParent>
                  <SocialIcon5 alt="" src="/social3.svg" />
                  <AppNameWrapper>
                    <AppName>Request Source</AppName>
                  </AppNameWrapper>
                </SocialParent>
                <ButtonOutline6>
                  <AddIcon alt="" src="/add5.svg" />
                  <JenniferLinton>Add</JenniferLinton>
                </ButtonOutline6>
              </AppSource>
              <AppSource>
                <SocialParent>
                  <SocialIcon5 alt="" src="/social3.svg" />
                  <AppNameWrapper>
                    <AppName>Coming Soon</AppName>
                  </AppNameWrapper>
                </SocialParent>
                <ButtonOutline6>
                  <AddIcon alt="" src="/add5.svg" />
                  <JenniferLinton>Add</JenniferLinton>
                </ButtonOutline6>
              </AppSource>
            </AppSourceGroup>
          </FrameParent>
          <SearchParent>
            <CollapseIcon1 alt="" src="/search.svg" />
            <SearchByName>{`Search by name `}</SearchByName>
          </SearchParent>
          <SuggestedSources>Suggested Sources</SuggestedSources>
          <FrameGroup>
            <TabParent>
              <Tab>
                <JenniferLinton>Add Source</JenniferLinton>
              </Tab>
              <Tab1>
                <SearchByName>Active Source</SearchByName>
              </Tab1>
            </TabParent>
            <SmallButton>
              <AddIcon alt="" src="/upload2.svg" />
              <JenniferLinton>File Upload</JenniferLinton>
            </SmallButton>
          </FrameGroup>
        </Dashboard1>
        <TtleBar>
          <FeedTheBrain2>Feed the Brain</FeedTheBrain2>
        </TtleBar>
      </WorkSpace>
      <Overlay />
      <SettingsModal />
    </SettingsRoot>
  );
};

export default Settings4;
