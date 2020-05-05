import React, { useContext } from "react";
import { Item, Segment, Button, Label } from "semantic-ui-react";
import { observer } from "mobx-react-lite";

import ActivityStore from "../../../app/stores/activityStore";
import { Link } from "react-router-dom";
interface Iprops {}

const ActivityList: React.FC<Iprops> = () => {
  const activityStore = useContext(ActivityStore);
  const {
    activitiesByDate,
    deleteActivity,
    submitting,
    target,
  } = activityStore;
  return (
    <Segment clearing>
      <Item.Group divided>
        {activitiesByDate.map((activity) => {
          return (
            <Item key={activity.id}>
              <Item.Content>
                <Item.Header as="a">{activity.title}</Item.Header>
                <Item.Meta>{activity.date}</Item.Meta>
                <Item.Description>
                  <div>{activity.description}</div>
                  <div>
                    {activity.city}, {activity.venue}
                  </div>
                </Item.Description>
                <Item.Extra>
                  <Button
                    as={Link}
                    to={`/activities/${activity.id}`}
                    floated="right"
                    content="view"
                    color="blue"
                  />
                  <Button
                    name={activity.id}
                    onClick={(e) => deleteActivity(e, activity.id)}
                    floated="right"
                    content="Delete"
                    color="red"
                    loading={target === activity.id && submitting}
                  />
                  <Label basic content={activity.category} />
                </Item.Extra>
              </Item.Content>
            </Item>
          );
        })}
      </Item.Group>
    </Segment>
  );
};

export default observer(ActivityList);
