import React from 'react'
import { Card, Row, Col, Typography, notification, Badge, Tag } from 'antd';
import { SoundOutlined, CopyOutlined } from '@ant-design/icons';

export default class LexemInfo extends React.Component {

    constructor(props) {
        super(props)
        this.playSound = this.playSound.bind(this)
        this.copyTranslation = this.copyTranslation.bind(this)
    }

    render() {
        let { lexem } = this.props

        return (
            <div>
                <Typography.Title level={2}>
                    {lexem.word} <Tag color="volcano">{lexem.exercise}</Tag>
                </Typography.Title>
                <Typography.Title level={3} style={{ marginTop: '5px', marginBottom: '50px' }}>{lexem.translations.join(', ')}</Typography.Title>
                <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
                    {lexem.phrases.map((phrase, id) => {
                        return this.renderPhrase(id, phrase)
                    })}
                </Row>
            </div>
        )
    }

    renderPhrase(id, phrase) {
        return (
            <Col key={id}>
                <Card
                    style={{ minWidth: '200px' }}
                    size="small"
                    title={phrase.text}
                    hoverable
                    actions={[
                        <CopyOutlined key="copy" onClick={() => this.copyTranslation(phrase.translation_text)} />,
                        <SoundOutlined
                            key="listen"
                            onClick={() => { this.playSound(phrase.tts) }}
                            hidden={!phrase.tts}
                            twoToneColor="#eb2f96"
                        />,
                    ]}
                >
                    <p>{phrase.translation_text}</p>
                    <p>{phrase.exercise}</p>
                    <p>{phrase.lexem_id}</p>
                </Card>
            </Col>
        )
    }

    playSound(url) {
        let audio = new Audio(url)
        audio.play()
    }

    copyTranslation(text) {
        const el = document.createElement('textarea');
        el.value = text;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        notification.open({
            message: 'Translation copied!',
            description: text
        })
    }

}