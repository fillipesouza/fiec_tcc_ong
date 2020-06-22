import React, { useState, useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  StyleSheet,
  View,
  Button,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { Formik } from "formik";
import { MyForm, MyInput } from "../components/utils/MyFormik";
import * as Yup from "yup";
import * as userActions from "../store/UserAction";
import * as SecureStore from "expo-secure-store";
import * as Permissions from "expo-permissions";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email("well that's not an email"),
  password: Yup.string().required().min(2, "pretty sure this will be hacked"),
});

const LoginScreen = (props) => {
  const [isSignUp, setisSignUp] = useState(false);
  const dispatch = useDispatch();

  const autoLogin = useCallback(async () => {
    let authInfo = await SecureStore.getItemAsync("credentials");
    authInfo = JSON.parse(authInfo);
    const { idToken, localId, expiryTime, email } = authInfo;
    const willExpireTime = new Date(expiryTime);
    if (willExpireTime.getTime() >= new Date().getTime()) {
      dispatch(userActions.autoLogin(idToken, localId, willExpireTime, email));
      await props.navigation.navigate("Home");
    }
  }, [dispatch]);

  useEffect(() => {
    autoLogin();
  }, [autoLogin]);

  const authenticateUser = async (values) => {
    const { email, password } = values;
    try {
      dispatch(userActions.authenticateUser(email, password, isSignUp));
      await props.navigation.navigate("Home");
    } catch (error) {}
  };

  return (
    <KeyboardAvoidingView style={styles.LoginScreen}>
      <ScrollView>
        <View style={styles.logoContainer}>
          <Image source={require("../../assets/cod.png")} style={styles.logo} />
        </View>
        <View style={styles.form}>
          <Formik
            onSubmit={(values) => authenticateUser(values)}
            initialValues={{ email: "a", password: "b" }}
            validationSchema={validationSchema}
          >
            {(props) => {
              return (
                <MyForm>
                  <MyInput label="E-mail" name="email" type="email" />
                  <MyInput label="Senha" name="password" type="password" />
                  <View style={styles.formButtons}>
                    <Button
                      onPress={props.handleSubmit}
                      title={isSignUp ? "Registrar-se" : "Entrar"}
                    />
                  </View>
                  <View style={styles.formButtons}>
                    <Button
                      onPress={() => setisSignUp((state) => !state)}
                      title={isSignUp ? "Voltar" : "Registrar-se"}
                      color="#9b51e0"
                    />
                  </View>
                </MyForm>
              );
            }}
          </Formik>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  LoginScreen: {
    flex: 1,
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    margin: 50,
  },
  logo: {
    width: 250,
    height: 250,
  },
  form: {
    margin: 20,
  },
  formButtons: {
    marginTop: 10,
    borderWidth: 1,
  },
});
