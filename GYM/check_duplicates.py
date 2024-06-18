import sqlite3

# Conecte-se ao banco de dados SQLite
conn = sqlite3.connect('db.sqlite3')
cursor = conn.cursor()

# Verifique registros duplicados
cursor.execute('''
    SELECT cpf, COUNT(*)
    FROM Alunos_aluno
    GROUP BY cpf
    HAVING COUNT(*) > 1
''')

duplicados = cursor.fetchall()
if duplicados:
    print("Registros duplicados encontrados:")
    for row in duplicados:
        print(row)
else:
    print("Nenhum registro duplicado encontrado.")

# Feche a conexão
conn.close()
