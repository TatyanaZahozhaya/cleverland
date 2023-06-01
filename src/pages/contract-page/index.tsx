import { AppContainer, ContentContainer, PageNameText, SideMenu, TextContent } from '../../shared/components';

export const ContractPage = () => (
  <AppContainer>
    <div className='central-part_container'>
      <SideMenu />
      <ContentContainer>
        <PageNameText name='Договор оферты' />
        <TextContent />
      </ContentContainer>
    </div>
  </AppContainer>
);
