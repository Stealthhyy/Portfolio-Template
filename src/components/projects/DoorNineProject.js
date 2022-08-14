import '../../styles/Project.scss';
import {Row, Col} from 'react-bootstrap';
import ProjectTextCard from '../ProjectTextCard';
import ProjectImageCard from '../ProjectImageCard';
import ProjectVideoCard from '../ProjectVideoCard';
import ProjectYoutubeEmbedCard from '../ProjectYoutubeEmbedCard';

export default function DoorNineProject() {
    return (
        <div className="project">
            <Row>
                {/* ------ Left Column ------ */}
                <Col md={9}>

                    {/* ------ Row 1 ------ */}
                    <Row>
                        <Col>
                            <ProjectYoutubeEmbedCard src="3rI2HQh3J4w" />                            
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <ProjectTextCard>
                                <h2>Door 9</h2>
                                <br />
                                <h3>Summary</h3>
                                <p>A brutal concrete maze,  instant transitions from light to dark, and a shrouded entity in pursuit... Will you make it to door 9?

                                Door 9 is a short horror experience made for the Aotearoa 48h Game Jam 2022.</p>
                                <p>Door9 was awarded: People's Choice for Game Jam Aotearoa 2022</p>
                            </ProjectTextCard>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <ProjectTextCard>
                                <h2>Theme: Transition</h2>
                                <br />
                                <p>Door9 fits Game Jam Aotearoa 2022's Theme by building the Horror environment around the transition of two states:</p>
                                <p>An Eerie, empty day time scene, and its night time hellscape variant.</p>
                            </ProjectTextCard>
                        </Col>
                        <Col>
                            <ProjectImageCard src="/images/door9/image1.png" />
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <ProjectImageCard src="/images/door9/image3.png" />
                        </Col>
                        <Col>
                            <ProjectTextCard>
                                <h2>Gameplay:</h2>
                                <br />
                                <p>Waking up in a concrete maze with harsh environment inspired by architectural brutalism, you traverse the hallways looking for the infamous Door 9...</p>
                                <p>Hopefully thats the only thing you find...</p>
                            </ProjectTextCard>
                        </Col>
                    </Row>
                </Col>

                {/* ------ Right Column ------ */}
                <Col>example

                    <ProjectImageCard src="/images/door9/logo.png" />

                    <ProjectTextCard>
                        <h2>Team Members</h2>
                        <ul>
                            <li>Dylan - Design, Programming</li>
                            <li>Jared - Design, Programming, Technical Art</li>
                            <li>Travers  - Design, Programming</li>
                            <li>Shan - 3D Modelling, Animation, 2D Art</li>
                            <li>Max -  3D Modelling, Texturing</li>
                            <li>Hamish - Sound Design</li>
                        </ul>
                    </ProjectTextCard>

                    <iframe frameborder="0" src="https://itch.io/embed/1540974?linkback=true" width="208" height="167"><a href="https://sugoi-yellow.itch.io/door-9">Door 9 by Sugoi Yellow, Stealthhyy, MaxSkerrett, uncoolly, HeadCoach, HamishOliver</a></iframe>
                </Col>
            </Row>
        </div>
    )
}
