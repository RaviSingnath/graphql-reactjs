import React from 'react'
import { Card, CardBody, CardHeader, CardSubtitle, ListGroup, ListGroupItem, Badge } from 'reactstrap';

const Topics = ({ topicsData, onTopicClick }) => {
  return (
    <>
      {topicsData.length > 0 && topicsData.map(r => {
        const { repositoryTopics, description, name, url, id } = r
        return (
          <Card key={id} className='mt-3'>
            <CardHeader><a href={url}>{name}</a></CardHeader>
            <CardBody>
              <CardSubtitle>{description}</CardSubtitle>
              <ListGroup flush>
                {repositoryTopics.edges.map(t => {
                  const { node: { topic } } = t
                  return <ListGroupItem key={topic.id}>
                  <Badge color="primary" pill role='button' onClick={() => onTopicClick(topic.name)}>{topic.name}</Badge>
                  <b className='mx-3'>Stargazer Count: <span>{topic.stargazerCount}</span></b>
                </ListGroupItem>
                })}
              </ListGroup>
            </CardBody>
          </Card>
        )
      })}
    </>
  )
}

export default Topics
