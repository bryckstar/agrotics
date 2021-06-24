import React, {useState} from 'react';
import {useContext} from 'react';
import {Alert, SafeAreaView, View} from 'react-native';
import {LoginStyles} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button, Input, Text} from 'react-native-elements';
import {AuthContext} from '../../contexts/authContext';
import {LoginService} from '../../services/auth-service';
import {useForm, Controller} from 'react-hook-form';
import Title from '../../assets/images/titulo.svg';
const LoginScreen = ({navigation}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {saveUser} = useContext(AuthContext);

  const onSubmit = async data => {
    setIsLoading(true);
    const {email, password} = data;
    try {
      const token = await LoginService.login(email, password);
      setIsLoading(false);
      saveUser(token.token);
    } catch (error) {
      setIsLoading(false);
      Alert.alert(error.message);
    }
  };
  return (
    <SafeAreaView>
      <View style={LoginStyles.viewWrapper}>
        <View style={LoginStyles.formWrapper}>
          <View style={{paddingLeft: 25}}>
            <Title />
          </View>
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                style={{marginTop: '5%'}}
                errorMessage={errors.email ? 'Campo requiro' : ''}
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
                errorMessage={errors.password ? 'Campo requiro' : ''}
                secureTextEntry={!showPassword}
                placeholder="Contraseña"
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                leftIcon={
                  <Icon
                    name="unlock-alt"
                    size={24}
                    color="black"
                    onPress={() => {
                      setShowPassword(!showPassword);
                    }}
                  />
                }
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
              />
            )}
            name="password"
            rules={{required: true}}
            defaultValue=""
          />
          <Button
            buttonStyle={LoginStyles.boton}
            loading={isLoading}
            onPress={handleSubmit(onSubmit)}
            title="Iniciar Sesión"
          />
        </View>
        <Text
          onPress={() => {
            navigation.navigate('SignUp');
          }}
          style={LoginStyles.registerLink}>
          Registrarse
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
