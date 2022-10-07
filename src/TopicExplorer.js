import React, { useState, useEffect, useCallback } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import { SEARCH_TOPIC } from "./Queries";
import { Container, Row, Col, Spinner } from 'reactstrap';
import Topics from './Topics'

function TopicExplorer() {
  const [text, setText] = useState('react');
  const [topicsData, setTopicsData] = useState([]);

  const [searchTopic, { loading }] = useLazyQuery(SEARCH_TOPIC);

  const fetchData = useCallback(async(text) => {
    const topics = await searchTopic({
      variables: {
        q: `topic:${text} sort:updated-desc`
      },
      updateQuery() {},
    });
    setTopicsData(topics.data.search.nodes)
  }, [searchTopic])

  useEffect(() => {
    fetchData(text)
  }, [fetchData, text])

  return (
    <Container>
      <Row className='my-4'>
        <Col className="bg-light border py-3">
          <label htmlFor="search-topic">Search Topic</label>
          <div className="input-group mb-3">
            <input
              type="text"
              id="search-topic"
              className="form-control"
              placeholder="Search Topic"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
        </Col>
      </Row>

      <Row>
        <Col className="bg-light border py-3">
        {loading
        ? <Spinner color="dark" />
        : <Topics topicsData={topicsData} onTopicClick={(topic) => setText(topic)} />}
        </Col>
      </Row>
    </Container>
  )
}

export default TopicExplorer;
