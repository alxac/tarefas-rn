import { Pressable, ScrollView, Text, View, TextInput } from 'react-native';

import tarefasMock from '@/data/constants/tarefas';
import { bgBlue500, bgRed500, botao, flex1, flexRow, gap5, itemsCenter, lineThrough, px4, textWhite, textZinc500, w_9_10 } from '@/styles';
import { useState } from 'react';
import Tarefa from '@/data/model/Tarefas';
import { AntDesign } from '@expo/vector-icons';

export default function HomeScreen() {
  const [tarefas, setTarefas] = useState<Tarefa[]>(tarefasMock);
  const [descricao, setDescricao] = useState<string>("teste001");

  function concluir(tarefa: Tarefa) {
    const novasT = tarefas.map((t) => {
      if (t.id === tarefa.id) {
        return { ...t, concluido: !t.concluido }
      }
      return t
    })
    setTarefas(novasT)
  }

  function exluirT(tarefa: Tarefa) {
    const novasT = tarefas.filter((t) => t.id !== tarefa.id)
    setTarefas(novasT)
  }

  function addT() {
    if (descricao.trim() === '') {
      return
    }
    const novoT: Tarefa = {
      id: Math.random(),
      descricao,
      concluido: false,
    }
    setTarefas([...tarefas, novoT])
    setDescricao
  }
  return (
    <ScrollView contentContainerStyle={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <View>
        <TextInput value={descricao} onChangeText={setDescricao} style={textWhite} />
        <Pressable style={[botao, px4]} onPress={addT}>
          <AntDesign name='plus' size={9} color="white" />
        </Pressable>
      </View>
      <View style={w_9_10}>
        {tarefas.map((t) => (
          <View key={t.id} style={[flexRow, gap5, itemsCenter]}>
            <Text style={t.concluido ? [textWhite, lineThrough, textZinc500, flex1] : [textWhite, flex1]}>{t.descricao}</Text>
            <Pressable onPress={() => concluir(t)}>
              <AntDesign name='eye' size={15} color="white" />
            </Pressable>
            <Pressable style={[botao, bgRed500, px4]} onPress={() => exluirT(t)}>
              <AntDesign name='delete' size={9} color="white" />
            </Pressable>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}