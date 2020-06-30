import React from 'react'
import { Image, Linking, ScrollView } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import * as MailComposer from 'expo-mail-composer'


import {
  Container,
  Header,
  ButtonTouch,
  Incident,
  IncidentProperty,
  IncidentValue,
  ContactBox,
  HeroTitle,
  HeroDescription,
  Actions,
  ActionTouch,
  ActionText,
} from './styles'

export default function Detail() {
  const navigation = useNavigation()
  const route = useRoute()

  const { incident } = route.params
  const message = `Olá ${
    incident.name
  }, estou entrando em contato pois gostaria de participar do evento "${incident.title}".` 

  function navigateBack() {
    navigation.goBack()
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: `Gostaria de participar do evento: ${incident.title}`,
      recipients: [incident.email],
      body: message,
    })
  }

  function sendWhatsapp() {
    Linking.openURL(
      `whatsapp://send?phone=${incident.whatsapp}&text=${message}`
    )
  }

  return (
    <ScrollView>
    <Container>
      <Header>
        <ButtonTouch onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#9b51e0" />
        </ButtonTouch>
      </Header>

      <Incident>
        <IncidentProperty style={{ marginTop: 0 }}>ONG:</IncidentProperty>
        <IncidentValue>
          {incident.name} de {incident.city}/{incident.uf}
        </IncidentValue>

        <IncidentProperty>DESCRIÇÃO:</IncidentProperty>
        <IncidentValue>{incident.description}</IncidentValue>

        <IncidentProperty>LOCAL DO EVENTO:</IncidentProperty>
        <IncidentValue>{incident.value}</IncidentValue>
      </Incident>

      <ContactBox>
        <HeroTitle>Gostou da idéia!</HeroTitle>
        <HeroTitle>Fale com a ONG organizadora.</HeroTitle>

        <HeroDescription>Entre em contato via:</HeroDescription>

        <Actions>
          <ActionTouch onPress={sendWhatsapp}>
            <ActionText>WhatsApp</ActionText>
          </ActionTouch>

          <ActionTouch onPress={sendMail}>
            <ActionText>E-mail</ActionText>
          </ActionTouch>
        </Actions>
      </ContactBox>
    </Container>
    </ScrollView>
  )
}
