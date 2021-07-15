import React, {useState} from 'react';
import {Button, Input, Text, Slider} from 'react-native-elements';
import {useForm, Controller} from 'react-hook-form';
import {Alert, SafeAreaView, View, ScrollView, Animated} from 'react-native';
import {PlantStyles} from './styles';
import {campDataService} from '../../services/campData-service';
import CollapsibleView from '@eliav2/react-native-collapsible-view';

const PlantScreen = ({route}) => {
  const [sliderValue, setSliderValue] = useState(7);
  const id = route.params.paramKey;
  const id2 = route.params.id;
  console.log(id);
  console.log('esto esta pasando', id2);
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
    <View style={PlantStyles.viewWrapper}>
      <ScrollView>
        <View style={PlantStyles.formWrapper}>
          <View style={{padding: '10%', paddingTop: '20%'}}>
            <Text h1 style={{textAlign: 'center', color: '#639E2E'}}>
              {' '}
              Datos de Campo
            </Text>
          </View>
          <CollapsibleView
            title={<Text style={PlantStyles.datos}>Datos de Planta</Text>}
            style={PlantStyles.CollapsibleView}
            arrowStyling={{
              size: 24,
              rounded: true,
              thickness: 2,
              color: '#88D046',
            }}>
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <Input
                  tyle={{marginTop: '5%'}}
                  placeholder="Ubicación"
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={id || id2}
                />
              )}
              name="idPlant"
              rules={{required: false}}
              defaultValue={id || id2}
            />
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <Input
                  tyle={{marginTop: '5%'}}
                  placeholder="Ubicación"
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
                  style={{marginTop: '5%', display:'none'}}
                  placeholder="Fecha"
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                  defaultValue={new Date().toISOString()}
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
                  placeholder="Área plantada (Metros cuadrados)"
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
                  placeholder="Diámetro (cm)"
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
          </CollapsibleView>
          <CollapsibleView
            title={<Text style={PlantStyles.datos}>Datos de Producción</Text>}
            style={PlantStyles.CollapsibleView}
            arrowStyling={{
              size: 24,
              rounded: true,
              thickness: 2,
              color: '#88D046',
            }}>
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
                  placeholder="Diámetro de fruta (cm)"
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
                  placeholder="Producción por planta (kg)"
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
              name="productionPerPlant"
              rules={{required: false}}
              defaultValue=""
            />
          </CollapsibleView>
          <CollapsibleView
            title={<Text style={PlantStyles.datos}>Datos Bioquímicos</Text>}
            style={PlantStyles.CollapsibleView}
            arrowStyling={{
              size: 24,
              rounded: true,
              thickness: 2,
              color: '#88D046',
            }}>
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
          </CollapsibleView>
          <CollapsibleView
            title={<Text style={PlantStyles.datos}>Datos Meteorológicos</Text>}
            style={PlantStyles.CollapsibleView}
            arrowStyling={{
              size: 24,
              rounded: true,
              thickness: 2,
              color: '#88D046',
            }}>
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
          </CollapsibleView>
          <CollapsibleView
            title={<Text style={PlantStyles.datos}>Datos de Fertilizante</Text>}
            style={PlantStyles.CollapsibleView}
            arrowStyling={{
              size: 24,
              rounded: true,
              thickness: 2,
              color: '#88D046',
            }}>
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
          </CollapsibleView>
        </View>
      </ScrollView>

      <View>
        <Button
          buttonStyle={PlantStyles.Button}
          onPress={handleSubmit(onSubmit)}
          title="Enviar"
        />
      </View>
    </View>
  );
};

export default PlantScreen;
