import { AppContainer, ContentContainer, PageNameText, SideMenu, TextContent } from '../../shared/components';

export const TermsPage = () => (
  <AppContainer>
    <div className='central-part_container'>
      <SideMenu />
      <ContentContainer>
        <PageNameText name='Правила пользования' />
        <TextContent />
      </ContentContainer>
    </div>
  </AppContainer>
);
