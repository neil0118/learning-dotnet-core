import React, { useContext, Fragment } from "react";
import { Item, Segment, Label } from "semantic-ui-react";
import { observer } from "mobx-react-lite";

import ActivityStore from "../../../app/stores/activityStore";
import ActivityListItem from "./ActivityListItem";

interface Iprops {}

const ActivityList: React.FC<Iprops> = () => {
  const activityStore = useContext(ActivityStore);
  const { activitiesByDate } = activityStore;
  return (
    <Fragment>
      {activitiesByDate.map(([group, activities]) => (
        <Fragment key={group}>
          <Label key={group} size="large" color="blue">
            {group}
          </Label>
          <Segment clearing>
            <Item.Group divided>
              {activities.map((activity) => {
                return (
                  <ActivityListItem key={activity.id} activity={activity} />
                );
              })}
            </Item.Group>
          </Segment>
        </Fragment>
      ))}
    </Fragment>
  );
};

export default observer(ActivityList);
