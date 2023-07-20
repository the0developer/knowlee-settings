import { FunctionComponent } from "react";
import styled from "styled-components";
import AskKnowleeSupport from "../components/AskKnowleeSupport";

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
const Updates = styled.div`
  position: relative;
  line-height: 24px;
`;
const Tab = styled.div`
  border-radius: var(--br-31xl);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: var(--padding-5xs) var(--padding-xl);
  align-items: center;
  justify-content: center;
`;
const Tab1 = styled.div`
  border-radius: var(--br-31xl);
  background-color: var(--primary-50);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: var(--padding-5xs) var(--padding-xl);
  align-items: center;
  justify-content: center;
  color: var(--neutral-01-100);
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
  color: var(--neutral-60);
`;
const PlusWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: var(--padding-9xs);
  align-items: center;
  justify-content: center;
`;
const Question = styled.div`
  align-self: stretch;
  position: relative;
  line-height: 24px;
  font-weight: 500;
`;
const Answer = styled.div`
  align-self: stretch;
  position: relative;
  letter-spacing: -0.02em;
  line-height: 24px;
  font-weight: 500;
  font-family: var(--base-1);
  color: var(--neutral-60);
  display: none;
`;
const QuestionParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-5xs);
`;
const Accordion = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  padding: var(--padding-5xl) 0px;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-13xl);
`;
const Answer1 = styled.div`
  align-self: stretch;
  position: relative;
  line-height: 24px;
  color: var(--neutral-60);
`;
const Accordion1 = styled.div`
  align-self: stretch;
  border-top: 1px solid var(--neutral-30);
  display: flex;
  flex-direction: row;
  padding: var(--padding-5xl) 0px;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-13xl);
`;
const AccordionParent = styled.div`
  position: absolute;
  top: 424px;
  left: 80px;
  width: 936px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  color: var(--neutral-90);
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
  font-size: var(--h5-medium-size);
  color: var(--neutral-100);
`;
const SendAnEmail = styled.div`
  position: absolute;
  top: 128px;
  left: calc(50% - 51px);
  line-height: 24px;
  font-weight: 500;
`;
const FrameIcon = styled.img`
  position: absolute;
  top: 32px;
  left: calc(50% - 40px);
  width: 80px;
  height: 80px;
  overflow: hidden;
`;
const SendAnEmailParent = styled.div`
  position: absolute;
  top: 200px;
  left: 80px;
  border-radius: var(--br-xl);
  background-color: var(--neutral-02-50);
  width: 456px;
  height: 184px;
  overflow: hidden;
  text-align: center;
`;
const OpenATicket = styled.div`
  position: absolute;
  top: 128px;
  left: calc(50% - 48px);
  line-height: 24px;
  font-weight: 500;
`;
const OpenATicketParent = styled.div`
  position: absolute;
  top: 200px;
  left: 560px;
  border-radius: var(--br-xl);
  background-color: var(--neutral-02-50);
  width: 456px;
  height: 184px;
  overflow: hidden;
  text-align: center;
`;
const Subsription = styled.div`
  position: absolute;
  top: 24px;
  left: 0px;
  border-radius: var(--br-xl);
  background-color: var(--neutral-01-100);
  width: 1096px;
  height: 1764px;
`;
const WorkSpace = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  background-color: var(--neutral-100);
  width: 1120px;
  height: 1788px;
  overflow: hidden;
  color: var(--primary-100);
`;
const CommunityAndSupportRoot = styled.div`
  position: relative;
  border-radius: var(--br-xl);
  background-color: var(--neutral-100);
  width: 100%;
  height: 1812px;
  overflow: hidden;
  text-align: left;
  font-size: var(--body-regula-size);
  color: var(--neutral-40);
  font-family: var(--body-regula);
`;
const CommunityAndSupport: FunctionComponent = () => {
  return (
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
            <CommunityAndSupport11>Community and Support</CommunityAndSupport11>
          </SidebarMenuItem3>
          <SidebarMenuItem4>
            <CollapseIcon1 alt="" src="/card.svg" />
            <Dashboard>Manage subscription</Dashboard>
          </SidebarMenuItem4>
          <SidebarMenuItem4>
            <CollapseIcon1 alt="" src="/settings10.svg" />
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
        <Subsription>
          <TabParent>
            <Tab>
              <Updates>Community</Updates>
            </Tab>
            <Tab1>
              <JenniferLinton>Support</JenniferLinton>
            </Tab1>
          </TabParent>
          <AccordionParent>
            <Accordion>
              <PlusWrapper>
                <CollapseIcon1 alt="" src="/plus1.svg" />
              </PlusWrapper>
              <QuestionParent>
                <Question>Are there any setup or installation fees?</Question>
                <Answer>Answer</Answer>
              </QuestionParent>
            </Accordion>
            <Accordion1>
              <PlusWrapper>
                <SunIcon alt="" src="/minus1.svg" />
              </PlusWrapper>
              <QuestionParent>
                <Question>
                  Can I try Brainwave before committing to a paid plan?
                </Question>
                <Answer1>
                  Yes, we offer a free plan with limited access to AI
                  capabilities. This plan is a great way to test the platform
                  and see if it meets your needs before upgrading to a paid
                  plan.
                </Answer1>
              </QuestionParent>
            </Accordion1>
            <Accordion1>
              <PlusWrapper>
                <CollapseIcon1 alt="" src="/plus1.svg" />
              </PlusWrapper>
              <QuestionParent>
                <Question>
                  Do you offer discounts for non-profit organizations or
                  educational institutions?
                </Question>
                <Answer>Answer</Answer>
              </QuestionParent>
            </Accordion1>
            <Accordion1>
              <PlusWrapper>
                <CollapseIcon1 alt="" src="/plus1.svg" />
              </PlusWrapper>
              <QuestionParent>
                <Question>
                  Do you offer a free trial for any of the plans?
                </Question>
                <Answer>Answer</Answer>
              </QuestionParent>
            </Accordion1>
            <Accordion1>
              <PlusWrapper>
                <CollapseIcon1 alt="" src="/plus1.svg" />
              </PlusWrapper>
              <QuestionParent>
                <Question>
                  Can I upgrade or downgrade my plan at any time?
                </Question>
                <Answer>Answer</Answer>
              </QuestionParent>
            </Accordion1>
            <Accordion1>
              <PlusWrapper>
                <CollapseIcon1 alt="" src="/plus1.svg" />
              </PlusWrapper>
              <QuestionParent>
                <Question>What is this Chat AI App all about?</Question>
                <Answer>Answer</Answer>
              </QuestionParent>
            </Accordion1>
            <Accordion1>
              <PlusWrapper>
                <CollapseIcon1 alt="" src="/plus1.svg" />
              </PlusWrapper>
              <QuestionParent>
                <Question>
                  What kinds of questions can I ask the Chat AI App?
                </Question>
                <Answer>Answer</Answer>
              </QuestionParent>
            </Accordion1>
            <Accordion1>
              <PlusWrapper>
                <CollapseIcon1 alt="" src="/plus1.svg" />
              </PlusWrapper>
              <QuestionParent>
                <Question>How do I cancel</Question>
                <Answer>Answer</Answer>
              </QuestionParent>
            </Accordion1>
            <Accordion1>
              <PlusWrapper>
                <CollapseIcon1 alt="" src="/plus1.svg" />
              </PlusWrapper>
              <QuestionParent>
                <Question>
                  Is the Chat AI App available in different languages?
                </Question>
                <Answer>Answer</Answer>
              </QuestionParent>
            </Accordion1>
          </AccordionParent>
          <AskKnowleeSupport />
          <TtleBar>
            <CommunityAndSupport2>Community and Support</CommunityAndSupport2>
          </TtleBar>
          <SendAnEmailParent>
            <SendAnEmail>Send an email</SendAnEmail>
            <FrameIcon alt="" src="/frame.svg" />
          </SendAnEmailParent>
          <OpenATicketParent>
            <OpenATicket>Open a ticket</OpenATicket>
            <FrameIcon alt="" src="/frame1.svg" />
          </OpenATicketParent>
        </Subsription>
      </WorkSpace>
    </CommunityAndSupportRoot>
  );
};

export default CommunityAndSupport;
