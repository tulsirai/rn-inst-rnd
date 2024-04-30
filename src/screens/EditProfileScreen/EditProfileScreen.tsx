import { View, Text, StyleSheet, Image, TextInput } from 'react-native'
import React from 'react'
import user from '../../assets/data/user.json';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import { useForm, Controller, Control } from 'react-hook-form';
import { IUser } from '../../types/models';

const URL_REGEX =
/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

type IEditableUserField = 'name'|'username'|'website'|'bio';

type IEditableUser = Pick<IUser, IEditableUserField>;

interface ICustomInput {
  control: Control<IEditableUser, object>;
  label: string;
  name: IEditableUserField;
  multiline?: boolean;
  rules?: object;
}

const CustomInput = ({control, name, label, multiline = false, rules={}}: ICustomInput) => (
  <Controller
    control={control}
    name={name}
    rules={rules}
    render={({field: {onChange, value, onBlur}, fieldState: {error}}) => {
     
      return(
        <View style={styles.inputContainer}>
          <Text style={styles.label}>{label}</Text> 
          <View style={{flex: 1}}>
            <TextInput 
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={label} 
              style={[
                styles.input,
                { borderColor: error ? colors.error : colors.border}
              ]} 
              multiline={multiline}
            />
            {error && <Text style={{color: colors.error}}>{error.message}</Text>}
          </View>          
        </View>
    )}}
  />
  
)
const EditProfileScreen = () => {
  const {control, handleSubmit, formState: { errors }} = useForm<IEditableUser>({
    defaultValues: {
      name: user.name,
      username: user.username,
      website: user.website,
      bio: user.bio
    }
  });

  const onSubmit = (data: IEditableUser) => {
    console.log("Submit", data);
  }

  return (
    <View style={styles.page}>
      <Image 
        source={{uri: user.image}}
        style={styles.avatar}
      />
      <Text style={styles.textButton}>Change Profile Photo</Text>
      <CustomInput 
        name='name' 
        control={control} 
        rules={{
          required: 'Name is required',
          minLength: {
            value: 3,
            message: 'Name should be more than 3 characters'
          },
        }} 
        label='Name'
      />
      <CustomInput 
        name='username' 
        control={control}  
        rules={{
          required: 'Username is required',
          minLength: {
            value: 3,
            message: 'Username should be more than 3 characters'
          },
        }}
        label='Username'
      />
      <CustomInput 
        name='website' 
        control={control} 
        rules={{
          required:'Website is required',
          pattern: {
            value: URL_REGEX,
            message: 'Invalid URL'
          }
        }} 
        label='Website'
      />
      <CustomInput 
        name='bio' 
        control={control} 
        rules={{
          required: 'Bio is required',
          maxLength: {
            value: 10,
            message: 'Bio should be more than 10 characters'
          },
        }} 
        label='Bio' multiline
      />

      <Text onPress={handleSubmit(onSubmit)} style={styles.textButton}>Submit</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  page: {
    alignItems: 'center',
    padding: 10,
  },  
  avatar: {
    width: '30%',
    aspectRatio: 1,
    borderRadius: 100,
  },
  textButton: {
    color: colors.primary,
    fontSize: fonts.size.md,
    fontWeight: fonts.weight.semi,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  label: {
    width: 100,
  },
  input: {
    // flex: 1,
    // borderColor: colors.border,
    borderBottomWidth: 1
  }
});

export default EditProfileScreen;