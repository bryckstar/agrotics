import React, {useState} from 'react';
import {Alert, View} from 'react-native';
import {Button, Input, Text} from 'react-native-elements';
import {SignUpStyles} from './styles';
import {useForm, Controller} from 'react-hook-form';
import Icon from 'react-native-vector-icons/FontAwesome';
import {LoginStyles} from '../login/styles';
import {LoginService} from '../../services/auth-service';

const SignupScreen = ({navigation}) => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = async data => {
    try {
      const message = await LoginService.register(data);
      Alert.alert(message);
    } catch (error) {
      Alert.alert(error);
    }
  };

  return (
    <View style={SignUpStyles.container}>
      <View style={SignUpStyles.formWrapper}>
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              placeholder="Nombres"
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
              leftIcon={<Icon name="user" size={24} color="black" />}
              errorMessage={errors.firstName ? 'Campo requerido' : ''}
            />
          )}
          name="firstName"
          rules={{required: true}}
          defaultValue=""
        />
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              errorMessage={errors.lastName ? 'Campo requerido' : ''}
              placeholder="Apellidos"
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
              leftIcon={<Icon name="user" size={24} color="black" />}
            />
          )}
          name="lastName"
          rules={{required: true}}
          defaultValue=""
        />
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              errorMessage={errors.email ? 'Campo requerido' : ''}
              placeholder="Email"
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
              leftIcon={<Icon name="envelope-o" size={24} color="black" />}
            />
          )}
          name="email"
          rules={{required: true}}
          defaultValue=""
        />
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              errorMessage={
                errors.password?.type === 'required'
                  ? 'Campo requerido'
                  : errors.password?.type === 'minLength'
                  ? 'Minimo 6 Caracteres'
                  : ''
              }
              secureTextEntry={!showPassword}
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
              leftIcon={<Icon name="unlock-alt" size={24} color="black" />}
              rightIcon={
                showPassword ? (
                  <Icon
                    name="eye-slash"
                    size={24}
                    color="black"
                    onPress={() => {
                      setShowPassword(!showPassword);
                    }}
                  />
                ) : (
                  <Icon
                    name="eye"
                    size={24}
                    color="black"
                    onPress={() => {
                      setShowPassword(!showPassword);
                    }}
                  />
                )
              }
              placeholder="Contraseña"
            />
          )}
          name="password"
          rules={{required: true, minLength: 6}}
          defaultValue=""
        />
        <Button
          buttonStyle={SignUpStyles.boton}
          title="Registrarse"
          onPress={handleSubmit(onSubmit)}
        />
      </View>
      <Text
        onPress={() => {
          console.log(errors);
          navigation.navigate('Login');
        }}
        style={LoginStyles.registerLink}>
        Iniciar Sesión
      </Text>
    </View>
  );
};

export default SignupScreen;
