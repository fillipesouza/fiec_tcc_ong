import React, { useState, useEffect } from 'react'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { Image } from 'react-native'
import api from '../../services/api'

import {
  Container,
  Header,
  HeaderText,
  HeaderTextBold,
  Title,
  Description,
  IncidentList,
  Incident,
  IncidentProperty,
  IncidentValue,
  ButtonTouch,
  DetailsButtonText,
} from './styles'


export default function Incidents() {
  const [incidents, setIncidents] = useState([])
  const [total, setTotal] = useState(0)

  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const navigation = useNavigation()

  function navigateToDetail(incident) {
    navigation.navigate('Detail', { incident })
  }

  async function loadIncidents() {
    if (loading) {
      return
    }

    if (total > 0 && incidents.length === total) {
      return
    }

    setLoading(true)

    const response = await api.get('incidents', {
      params: { page },
    })

    setIncidents([...incidents, ...response.data])
    setTotal(response.headers['x-total-count'])
    setPage(page + 1)
    setLoading(false)
  }

  useEffect(() => {
    loadIncidents()
  }, [])

  return (
    <Container>
      <Header>
      <HeaderText>
          Total de <HeaderTextBold>{total} eventos</HeaderTextBold>
        </HeaderText>
      </Header>

      <Title>Bem-vindo!</Title>
      <Description>Escolha um dos eventos abaixo e participe!</Description>

      <IncidentList
        data={incidents}
        keyExtractor={(incident) => String(incident.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.2}
        renderItem={({ item: incident }) => (
          <Incident>

          <IncidentProperty>IMAGEM DO EVENTO:</IncidentProperty>
          <IncidentValue> <Image  source={{uri: `http://192.168.15.13:3333/public-images/f_${incident.incidentimagem}.jpg`}} /> </IncidentValue>

            <IncidentProperty>ONG:</IncidentProperty>
            <IncidentValue>{incident.name}</IncidentValue>

            <IncidentProperty>EVENTO:</IncidentProperty>
            <IncidentValue>{incident.title}</IncidentValue>

            <IncidentProperty>LOCALIZAÇÃO:</IncidentProperty>
            <IncidentValue>{incident.value}</IncidentValue>

            <ButtonTouch onPress={() => navigateToDetail(incident)}>
              <DetailsButtonText>Ver mais detalhes</DetailsButtonText>
              <Feather name="arrow-right" size={16} color="#9b51e0" />
            </ButtonTouch>
          </Incident>
        )}
      />
    </Container>
  )
}
