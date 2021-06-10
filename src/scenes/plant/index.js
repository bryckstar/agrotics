import React from 'react';
import {Button, Input, Text} from 'react-native-elements';
import {useForm, Controller} from 'react-hook-form';
import {Alert, SafeAreaView, View, ScrollView} from 'react-native';
import {PlantStyles} from './styles';
import {campDataService} from '../../services/campData-service';

const PlantScreen = ({route}) => {
  const id = route.params.paramKey;
  console.log(id);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const onSubmit = async data => {
    try {
      const message = await campDataService.registerCampData(data);
      console.log(data, 'data');
      Alert.alert(JSON.stringify(message));
    } catch (error) {
      Alert.alert(JSON.stringify(error));
    }
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={PlantStyles.viewWrapper}>
          <View style={PlantStyles.formWrapper}>
            <Text>Values passed from First page: {route.params.paramKey}</Text>
            <Text h1 style={{textAlign: 'center'}}>
              {' '}
              Datos de Campo
            </Text>
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <Input
                  tyle={{marginTop: '5%'}}
                  placeholder="Ubicacion"
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={id}
                />
              )}
              name="idPlant"
              rules={{required: false}}
              defaultValue={id}
            />
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <Input
                  tyle={{marginTop: '5%'}}
                  placeholder="Ubicacion"
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
              name="location"
              rules={{required: false}}
              defaultValue=""
            />
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <Input
                  tyle={{marginTop: '5%'}}
                  placeholder="Fecha"
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
              name="date"
              rules={{required: false}}
              defaultValue=""
            />
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <Input
                  tyle={{marginTop: '5%'}}
                  placeholder="Lote"
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
              name="lote"
              rules={{required: false}}
              defaultValue=""
            />
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <Input
                  style={{marginTop: '5%'}}
                  keyboardType="numeric"
                  placeholder="Area plantada (Metros cuadrados)"
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
              name="numero"
              rules={{required: false}}
              defaultValue=""
            />
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <Input
                  tyle={{marginTop: '5%'}}
                  placeholder="Seed Time"
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
              name="seedTime"
              rules={{required: false}}
              defaultValue=""
            />
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <Input
                  style={{marginTop: '5%'}}
                  keyboardType="numeric"
                  placeholder="Germinación"
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
              name="germination"
              rules={{required: false}}
              defaultValue=""
            />
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <Input
                  style={{marginTop: '5%'}}
                  keyboardType="numeric"
                  placeholder="Altura (cm)"
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
              name="heigth"
              rules={{required: false}}
              defaultValue=""
            />
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <Input
                  style={{marginTop: '5%'}}
                  keyboardType="numeric"
                  placeholder="Diametro (cm)"
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
              name="diameter"
              rules={{required: false}}
              defaultValue=""
            />
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <Input
                  style={{marginTop: '5%'}}
                  keyboardType="numeric"
                  placeholder="Cantidad Racimos"
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
              name="bunches"
              rules={{required: false}}
              defaultValue=""
            />
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <Input
                  style={{marginTop: '5%'}}
                  keyboardType="numeric"
                  placeholder="Flores por racimo"
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
              name="flowersPerBunch"
              rules={{required: false}}
              defaultValue=""
            />
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <Input
                  style={{marginTop: '5%'}}
                  keyboardType="numeric"
                  placeholder="Flores Totales"
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
              name="totalFlowers"
              rules={{required: false}}
              defaultValue=""
            />
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <Input
                  style={{marginTop: '5%'}}
                  keyboardType="numeric"
                  placeholder="Frutas por rama"
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
              name="fruitPerBunch"
              rules={{required: false}}
              defaultValue=""
            />
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <Input
                  style={{marginTop: '5%'}}
                  keyboardType="numeric"
                  placeholder="Total de Frutas"
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
              name="totalFruit"
              rules={{required: false}}
              defaultValue=""
            />
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <Input
                  style={{marginTop: '5%'}}
                  keyboardType="numeric"
                  placeholder="Largo de frutas (cm)"
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
              name="fruitLength"
              rules={{required: false}}
              defaultValue=""
            />
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <Input
                  style={{marginTop: '5%'}}
                  keyboardType="numeric"
                  placeholder="Diametro de fruta (cm)"
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
              name="fruitDiameter"
              rules={{required: false}}
              defaultValue=""
            />
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <Input
                  style={{marginTop: '5%'}}
                  keyboardType="numeric"
                  placeholder="Peso de Fruta (g)"
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
              name="fruitWeigth"
              rules={{required: false}}
              defaultValue=""
            />
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <Input
                  style={{marginTop: '5%'}}
                  keyboardType="numeric"
                  placeholder="Producion por planta (kg)"
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
              name="productionPerPlant"
              rules={{required: false}}
              defaultValue=""
            />
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <Input
                  style={{marginTop: '5%'}}
                  keyboardType="numeric"
                  placeholder="Ph suelo (%)"
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
              name="groundPh"
              rules={{required: false}}
              defaultValue=""
            />
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <Input
                  style={{marginTop: '5%'}}
                  keyboardType="numeric"
                  placeholder="mo (%)"
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
              name="mo"
              rules={{required: false}}
              defaultValue=""
            />
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <Input
                  style={{marginTop: '5%'}}
                  keyboardType="numeric"
                  placeholder="Nitrógeno (%)"
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
              name="nitrogen"
              rules={{required: false}}
              defaultValue=""
            />
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <Input
                  style={{marginTop: '5%'}}
                  keyboardType="numeric"
                  placeholder="Fósforo (%)"
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
              name="match"
              rules={{required: false}}
              defaultValue=""
            />
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <Input
                  style={{marginTop: '5%'}}
                  keyboardType="numeric"
                  placeholder="Potasio (cmol/kg)"
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
              name="potassium"
              rules={{required: false}}
              defaultValue=""
            />
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <Input
                  tyle={{marginTop: '5%'}}
                  placeholder="Otros Elementos"
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
              name="otherElements"
              rules={{required: false}}
              defaultValue=""
            />
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <Input
                  style={{marginTop: '5%'}}
                  keyboardType="numeric"
                  placeholder="Temperatura (C°)"
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
              name="temperature"
              rules={{required: false}}
              defaultValue=""
            />
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <Input
                  style={{marginTop: '5%'}}
                  keyboardType="numeric"
                  placeholder="Humedad Relativa (%)"
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
              name="relativeHumidity"
              rules={{required: false}}
              defaultValue=""
            />
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <Input
                  style={{marginTop: '5%'}}
                  keyboardType="numeric"
                  placeholder="Lluvia de Riego (ml/planta)"
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
              name="irrigationRain"
              rules={{required: false}}
              defaultValue=""
            />
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <Input
                  style={{marginTop: '5%'}}
                  keyboardType="numeric"
                  placeholder="Lluvia de Riego (ml/planta)"
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
              name="irrigationRain"
              rules={{required: false}}
              defaultValue=""
            />
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <Input
                  tyle={{marginTop: '5%'}}
                  placeholder="Fertilizante"
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
              name="fertilizer"
              rules={{required: false}}
              defaultValue=""
            />
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <Input
                  style={{marginTop: '5%'}}
                  keyboardType="numeric"
                  placeholder="Cantidad Fertilizante (g/planta)"
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
              name="fertilizer"
              rules={{required: false}}
              defaultValue=""
            />
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <Input
                  tyle={{marginTop: '5%'}}
                  placeholder="Fecha Fertilizante"
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
              name="fertilizerDate"
              rules={{required: false}}
              defaultValue=""
            />
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <Input
                  tyle={{marginTop: '5%'}}
                  placeholder="Control Plagas"
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
              name="plagueControl"
              rules={{required: false}}
              defaultValue=""
            />
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <Input
                  tyle={{marginTop: '5%'}}
                  keyboardType="numeric"
                  placeholder="Cantidad control plagas"
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
              name="plagueControlAmount"
              rules={{required: false}}
              defaultValue=""
            />
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <Input
                  tyle={{marginTop: '5%'}}
                  keyboardType="numeric"
                  placeholder="Fecha Control Plagas"
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
              name="plagueControlDate"
              rules={{required: false}}
              defaultValue=""
            />
            <Button
              style={{marginTop: '10%'}}
              onPress={handleSubmit(onSubmit)}
              title="Enviar"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PlantScreen;
