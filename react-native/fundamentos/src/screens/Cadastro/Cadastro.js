import { Picker } from '@react-native-picker/picker'
import { Formik } from 'formik'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { TextInputMask } from 'react-native-masked-text'
import { Button, Text, TextInput } from 'react-native-paper'
import * as Yup from 'yup'

export default function Cadastro() {

  const validationSchema = Yup.object().shape({
    cpf: Yup.string().min(14, 'CPF incompleto').required('Campo obrigatorio'),
    nome: Yup.string().min(2, 'Poucos caracteres').max(50, 'Muitos caracteres').required('Campo obrigatorio'),
    username: Yup.string().min(2, 'Poucos caracteres').max(50, 'Muitos caracteres').required('Campo obrigatorio'),
    email: Yup.string().email('e-mail inválido').required('Campo obrigatorio'),
    password: Yup.string().min(8, 'A senha deve possuir no 8 caracteres no mínimo').max(12, 'Muitos caracteres').required('Campo obrigatorio'),
    sexo: Yup.string().required('Campo obrigatorio')
  })

  function submit(values) {
    console.log(values)
  }


  return (
    <View style={styles.container}>
      <Text variant='titleMedium'>Bem-vindo ao cadastro</Text>

      <Formik
        initialValues={{
          cpf: '',
          nome: '',
          username: '',
          email: '',
          password: '',
          sexo: 'masculino'
        }}
        validationSchema={validationSchema}
        onSubmit={submit}
      >

        {
          ({ handleChange, handleBlur, handleSubmit, errors, touched, values }) => (

            <View style={styles.inputArea}>

              <TextInput
                style={styles.input}
                mode='outlined'
                label='CPF'
                placeholder='000.000.000-00'
                onChangeText={handleChange('cpf')}
                onBlur={handleBlur('cpf')}
                value={values.cpf}
                error={errors.cpf}
                keyboardType='number-pad'
                render={props =>
                  <TextInputMask
                    {...props}
                    type={'cpf'}
                  />
                }
              />
              {errors.cpf && touched.cpf && <Text style={{ color: 'red' }}>{errors.cpf}</Text>}

              <TextInput
                style={styles.input}
                mode='outlined'
                label='Nome'
                placeholder='nome'
                onChangeText={handleChange('nome')}
                onBlur={handleBlur('nome')}
                value={values.nome}
                error={errors.nome}
              />
              {errors.nome && touched.nome && <Text style={{ color: 'red' }}>{errors.nome}</Text>}

              <TextInput
                style={styles.input}
                mode='outlined'
                label='E-mail'
                placeholder='teste@teste.com'
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                error={errors.email}
                keyboardType='email-address'
              />
              {errors.email && touched.email && <Text style={{ color: 'red' }}>{errors.email}</Text>}

              <TextInput
                style={styles.input}
                mode='outlined'
                label='Username'
                placeholder='username'
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username}
                error={errors.username}
              />
              {errors.username && touched.username && <Text style={{ color: 'red' }}>{errors.username}</Text>}

              <TextInput
                style={styles.input}
                mode='outlined'
                secureTextEntry
                label='Senha'
                placeholder='senha'
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                error={errors.password}
                keyboardType='number-pad'
              />
              {errors.password && touched.password && <Text style={{ color: 'red' }}>{errors.password}</Text>}

              <View style={{ marginTop: 10 }}>
                <Text>Sexo:</Text>
                <Picker
                  selectedValue={values.sexo}
                  onValueChange={handleChange('sexo')}
                  onBlur={handleBlur('sexo')}
                >
                  <Picker.Item label='masculino' value='masculino' />
                  <Picker.Item label='feminino' value='feminino' />
                </Picker>
                {errors.sexo && touched.sexo && <Text style={{ color: 'red' }}>{errors.sexo}</Text>}
              </View>

              <Button
                style={styles.button}
                mode='contained'
                onPress={handleSubmit}
              >
                Enviar
              </Button>

            </View>
          )
        }

      </Formik>


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputArea: {
    width: '85%',
    marginTop: 10
  },
  input: {
    marginTop: 10
  },
  button: {
    marginTop: 20
  }
})
