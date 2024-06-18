import sqlite3

# Conecte-se ao banco de dados SQLite
conn = sqlite3.connect('db.sqlite3')
cursor = conn.cursor()

# Remover registros duplicados mantendo o mais antigo
cursor.execute('''
    DELETE FROM Alunos_aluno
    WHERE id NOT IN (
        SELECT MIN(id)
        FROM Alunos_aluno
        GROUP BY cpf
    )
''')

# Salve as alterações
conn.commit()

print("Registros duplicados removidos.")

# Feche a conexão
conn.close()
