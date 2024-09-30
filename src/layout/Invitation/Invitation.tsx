import styled from '@emotion/styled';
import data from 'data.json';
import Host from '../Contact/Host.tsx';
import RoundButton from '@/components/RoundButton.tsx';
import { Caption, Paragraph } from '@/components/Text.tsx';

// URL을 HTML 링크로 변환하는 함수 (data.json에서 주소 형식이 있을 경우 a태그로 변환하는 함수)
function convertToLinks(text, displayText = '상세정보') {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(urlRegex, function(url) {
        return `<a href="${url}" target="_blank" rel="noopener noreferrer">${displayText}</a>`;
    });
}


const Invitation = () => {
  const { greeting } = data;
  return (
    <InvitationWrapper>
      {/*<Paragraph>{greeting.message}</Paragraph>*/}
        <Paragraph dangerouslySetInnerHTML={{ __html: convertToLinks(greeting.message) }} />
      <Host />
      <Caption textAlign={'center'}>{greeting.eventDetail}</Caption>
      {/* TODO: 구글캘린더 추가하기 기능을 넣는다면 링크 수정 */}
      {/*<RoundButton*/}
      {/*  target="_blank"*/}
      {/*  href=""*/}
      {/*  rel="noreferrer">*/}
      {/*  구글 캘린더 추가하기*/}
      {/*</RoundButton>*/}
    </InvitationWrapper>
  );
};

export default Invitation;

const InvitationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
