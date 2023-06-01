import {
  ITEM_1,
  ITEM_1_1,
  ITEM_1_2,
  ITEM_1_3,
  ITEM_1_4,
  ITEM_2,
  ITEM_2_1,
  ITEM_2_1_1,
  ITEM_2_1_2,
  ITEM_2_2,
  ITEM_3,
  ITEM_3_1,
  ITEM_3_1_1,
  ITEM_3_1_2,
  ITEM_3_2,
  ITEM_3_3,
  ITEM_3_3_1,
  ITEM_3_3_1_1,
  ITEM_3_3_1_2,
  ITEM_3_4,
} from '../../../app-data/content';
import { ListItem } from '../list-item';
import { OList } from '../o-list';

import './index.scss';

export const TextContent = () => (
  <article className='text-content' >
    <OList level={1}>
      <ListItem level={1} text={ITEM_1}>
        <OList level={2}>
          <ListItem level={2} text={ITEM_1_1} />
          <ListItem level={2} text={ITEM_1_2} />
          <ListItem level={2} text={ITEM_1_3} />
          <ListItem level={2} text={ITEM_1_4} />
        </OList>
      </ListItem>

      <ListItem level={1} text={ITEM_2}>
        <OList level={2}>
          <ListItem level={2} text={ITEM_2_1}>
            <OList level={3}>
              <ListItem level={3} text={ITEM_2_1_1} />
              <ListItem level={3} text={ITEM_2_1_2} />
            </OList>
          </ListItem>
          <ListItem level={2} text={ITEM_2_2} />
          <ListItem level={2} text={ITEM_2} />
          <ListItem level={2} text={ITEM_2} />
        </OList>
      </ListItem>
      <ListItem level={1} text={ITEM_3}>
        <OList level={2}>
          <ListItem level={2} text={ITEM_3_1}>
            <OList level={3}>
              <ListItem level={3} text={ITEM_3_1_1} />
              <ListItem level={3} text={ITEM_3_1_2} />
            </OList>
          </ListItem>
          <ListItem level={2} text={ITEM_3_2} />
          <ListItem level={2} text={ITEM_3_3}>
            <OList level={3}>
              <ListItem level={3} text={ITEM_3_3_1}>
                <OList level={4}>
                  <ListItem level={4} text={ITEM_3_3_1_1} />
                  <ListItem level={4} text={ITEM_3_3_1_2} />
                </OList>
              </ListItem>
            </OList>
          </ListItem>
          <ListItem level={2} text={ITEM_3_4} />
        </OList>
      </ListItem>
    </OList>
  </article>
);
