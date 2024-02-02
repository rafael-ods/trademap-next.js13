import Template from '@/app/templates'
import PageTitle from '@/component/PageTitle'
import UserCreateForm from '@/feature/User/Create/Form'

export default function Page() {
  return (
    <>
      <Template>
        <PageTitle
          overline="Trade map"
          title="Cadastro"
          paragraph="Já me cadastrei. Entrar agora!"
        />
        <UserCreateForm />
      </Template>
    </>
  )
}
