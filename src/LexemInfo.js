import React from 'react'
import { Card, Row, Col } from 'antd';
import { SoundOutlined, EllipsisOutlined, CopyOutlined } from '@ant-design/icons';

export default class LexemInfo extends React.Component {

    constructor(props) {
        super(props)
        console.log(props.lexem)
        this.playSound = this.playSound.bind(this)
    }

    render() {
        let { lexem } = this.props

        return (
            <div>
                <Row>
                    {lexem.phrases.map((phrase, id) => {
                        return this.renderPhrase(id, phrase)
                    })}
                </Row>
            </div>
        )
    }

    renderPhrase(id, phrase) {
        return (
            <Col>
                <Card
                    key={id}
                    style={{ width: 300 }}
                    size="default"
                    title={phrase.text}
                    actions={[
                        <CopyOutlined key="copy" onClick={this.copyTranslation.bind(this)} />,
                        (!phrase.tss ? <SoundOutlined key="listen" onClick={() => {this.playSound(phrase.tts)}} /> : ''),
                    ]}
                >
                    <p>{phrase.translationText}</p>
                </Card>
            </Col>
        )
    }

    playSound(url) {
        let audio = new Audio(url)
        audio.play()
    }

    copyTranslation() {
        alert('Translation copied!')
    }

}