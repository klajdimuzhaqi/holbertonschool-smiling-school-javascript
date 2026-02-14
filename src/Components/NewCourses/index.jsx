import axios from "axios";
import { useState, useEffect } from "react";
import { Container, Row, Col, Card, Form, Alert } from "react-bootstrap";
import { CiStar } from "react-icons/ci";
import "./index.css";

const NewCourses = () => {

    const [courses, setCourses] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [topic, setTopic] = useState("All");

    useEffect(() => {
        async function loadCourses() {
            try {
                const result = await axios.get("https://smileschool-api.hbtn.info/courses");
                if (result.status === 200) {
                    setCourses(result.data.courses);
                }
            } catch (error) {
                console.log("error---", error);
            }
        }
        loadCourses();
    }, []);

    const handleChange = (event) => {
        const value = event.target.value.trim().toLowerCase();
        setSearchTerm(value);
    }

    const handleTopic = (event) => {
        const value = event.target.value;
        setTopic(value);
    }

    const searchedCourses = courses.filter((course, index) => {
        const byKeyword = course.title.toLowerCase().includes(searchTerm);
        const byTopic = topic === "All" || course.topic.toLowerCase() === topic.toLowerCase();
        return byKeyword && byTopic;
    });

    return (
        <>
            <Container>
                <Form>
                    <Row className="filter-container">

                        <Col md={4}>
                            <Form.Label>KEYWORDS</Form.Label>
                            <Form.Control type="text" placeholder="Search by keywords" onChange={handleChange} />
                        </Col>
                        <Col md={4}>
                            <Form.Label>TOPIC</Form.Label>
                            <Form.Select onChange={handleTopic} value={topic}>
                                <option value="All">All</option>
                                <option value="Novice">Novice</option>
                                <option value="Intermediate">Intermediate</option>
                                <option value="Expert">Expert</option>
                            </Form.Select>
                        </Col>
                        <Col md={4}>
                            <Form.Label>SORT BY</Form.Label>
                            <Form.Select>
                                <option value="most_popular">Most popular</option>
                                <option value="most_viewed">Most viewed</option>
                                <option value="most_recent">Most recent</option>
                            </Form.Select>
                        </Col>

                    </Row>
                </Form>
                <Row>
                    {
                        searchedCourses.length > 0 ?
                            searchedCourses.map((course, index) => {
                                return (
                                    <Col md={3} key={index}>
                                        <Card>
                                            <Card.Img variant="top" src={course.author_pic_url} />
                                            <Card.Body>
                                                <Card.Title>{course.author}</Card.Title>
                                                <Card.Text>{course.title}</Card.Text>
                                                {Array.from({ length: course.star }).map((_, index) => (
                                                    <CiStar key={index} />
                                                ))}
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )
                            })
                            :
                            <Alert variant="danger">Nod Data</Alert>
                    }
                </Row>
            </Container>
        </>
    )
}