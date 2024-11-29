import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

import '../css/HomePage.css';
import '../css/Logo.css'

const HomePage = () => {
  return (
    
    <div>
      
      <header style={{ backgroundColor: '#f8f9fa', padding: '20px' }}>
        <h1 style={{ textAlign: 'center' }}>مرحبًا بكم في موقع خدمات الطلاب والسياحة</h1>
        <p style={{ textAlign: 'center' }}>
          نحن هنا لمساعدتكم في تحقيق أحلامكم الأكاديمية والمهنية
        </p>
      </header>
      <div>
      
     
      
    </div>
      <Container>
        <Row>
          <Col>
            <h2 style={{ textAlign: 'center', margin: '20px 0' }}>المركز العربي (جامعة تيومين الحكوميه)</h2>
          </Col>
        </Row>

        <Row>
          <Col>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="./images/img.webp"
                  alt="University of Tyumen"
                  style={{ height: '400px', objectFit: 'cover' }}
                />
                <Carousel.Caption>
                  <h3>جامعة تيومين</h3>
                  <p>واحدة من أرقى الجامعات في روسيا.</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="./images/img2.webp"
                  alt="University Campus"
                  style={{ height: '400px', objectFit: 'cover' }}
                />
                <Carousel.Caption>
                  <h3>الحرم الجامعي الحديث</h3>
                  <p>بيئة تعليمية متكاملة للطلاب الدوليين.</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="./images/img3.webp"
                  alt="Arab and Russian Students"
                  style={{ height: '500px', objectFit: 'cover' }}
                />
                <Carousel.Caption>
                  <h3>طلاب عرب وروس</h3>
                  <p>التعايش الثقافي بين الجنسيات المختلفة.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>

        <Row style={{ marginTop: '30px', textAlign: 'center' }}>
          <Col>
            <h3>خدماتنا</h3>
            <p>نوفر خدمات الترجمة، التعليم، الوظائف، والسياحة.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;