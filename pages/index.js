import styled from 'styled-components'
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutMenuCommons'


function ProfileSideBar(propriedades) {
  //console.log(propriedades);
  return (
    <Box>
      <img src={`https://github.com/${propriedades.gitHubUser}.png`} style={{ borderRadius: '8px'}} />
    </Box>
  )
}

export default function Home() {
  const gitHubUser = 'msscsh';
  const pessoasFavoritas = ['a', 'b', 'c', 'd', 'e', 'f'];

  return (
    <>

      <AlurakutMenu />

      <MainGrid>

        <div id="abc" className="profileArea" style={{ gridArea: 'profileArea' }} >
          <ProfileSideBar gitHubUser={gitHubUser} />
        </div>

        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }} >
          <Box>
            <h1 className="title">
              Bem vindo(a)
            </h1>

            <OrkutNostalgicIconSet />

          </Box>
        </div>

        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }} >

          <ProfileRelationsBoxWrapper>

            <h2 className="smallTitle">
              Pessoas da comunidade ({pessoasFavoritas.length})
            </h2>

            <ul>
              {pessoasFavoritas.map( (itemAtual) => {
                return (
                  <li>
                    <a href={`/users/${itemAtual}`} key={itemAtual}>
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                )
              })}
            </ul>

          </ProfileRelationsBoxWrapper>

          <Box>
            Comunidades
          </Box>

        </div>

      </MainGrid>

    </>
  )
}
