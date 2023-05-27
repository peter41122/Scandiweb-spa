<?php
namespace Rustam\Scandiweb\Core\Model\services;

use Exception;
use Rustam\Scandiweb\Core\Model\contracts\ModelServiceInterface;
use PDO;
use PDOException;
use PDOStatement;

final class MysqlService implements ModelServiceInterface
{
    /**
     * servername for connection
     * @var string
     */
    private string $serverName;

    /**
     * username for db connection
     * @var string
     */
    private string $username;

    /**
     * password for db connection
     * @var string
     */
    private string $password;

    /**
     * db name for db connection
     * @var string
     */
    private string $db;

    /**
     * set table name
     * @var string
     */
    private string $tableName;

    private string $tableNameAs;

    /**
     * pdo instance
     * @var PDO
     */
    private PDO $connection;

    private PDOStatement $query;

    private ?string $localQuery = NULL;
    
    public function __construct()
    {
        $this->setConnectInformation();
        $this->connection();
    }

    /**
     * set table name
     * @param string $table
     * @return self;
     */
    public function setTable(string $table): self
    {
        $this->tableName = $table;
        $this->baseSelect();
        return $this;
    }

    public function where(string $columnName, string $columnValue)
    {
        $query = "WHERE $columnName = $columnValue";
        $this->setQuery($query);
        return $this;    
    }

    public function orderBy(string $column, string $resultSort)
    {
        $query = "ORDER BY $column $resultSort";
        $this->setQuery( $query );
        return $this;
    }

    public function all()
    {
        return $this->get();
    }

    public function get()
    {
        try {
            $this->prepareQuery();
            $this->query->execute();
            $this->query->setFetchMode(PDO::FETCH_ASSOC);
            return $this->query->fetchAll();
        } catch ( Exception $e ) {
            throw new Exception($e->getMessage());
        }
    }

    public function first()
    {
        try {
            $this->prepareQuery();
            $this->query->execute();
            $this->query->setFetchMode(PDO::FETCH_ASSOC);
            return $this->query->fetch();
        } catch ( Exception $e ) {
            throw new Exception($e->getMessage());
        }
    }

    public function leftJoin(string $tableName, string $foreignKey, string $localKey): self
    {
        $as = generateRandomString();
        $query = "LEFT JOIN $tableName as $as ON $as.$foreignKey = $this->tableNameAs.$localKey";
        $this->setQuery( $query );
        return $this;
    }
    
    public function create(array $createData)
    {
        $columns = [];

        $columnsData = "";

        foreach( $createData as $key => $value ) {
            $columns[] = $key;
            $columnsData = $columnsData ? " $columnsData, '$value'" : "'$value'";
        }

        $columnsImplode = implode(", ", $columns );

        var_dump( $columnsData );
        $sql = "INSERT INTO $this->tableName ( $columnsImplode )
            VALUES ( $columnsData )";

        $result = $this->connection->exec($sql);
        return $result ? $this->connection->lastInsertId() : $result;
    }

    public function delete(string $Id, string $columnName)
    {
        $id = is_array($Id) ? implode(",", $Id) : $Id;
        $condition = is_array($Id) ? "IN ($id)" : "= $id";
        $this->localQuery = null;
        
        $query = "DELETE FROM $this->tableName WHERE $columnName $condition";
        $this->setQuery($query);
        try {
            $this->prepareQuery();
            $this->query->execute();
            $this->query->setFetchMode(PDO::FETCH_ASSOC);
            return $this->query->fetch();
        } catch ( Exception $e ) {
            throw new Exception($e->getMessage());
        }
    }

    private function setConnectInformation()
    {
        $this->serverName = getenv('DB_HOST');
        $this->db = getenv('DB_DATABASE');
        $this->username = getenv('DB_USERNAME');
        $this->password = getenv('DB_PASSWORD');
    }

    private function connection()
    {
        try {
            $this->connection = new PDO("mysql:host=$this->serverName;dbname=$this->db", $this->username, $this->password);
            $this->connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
          } catch(PDOException $e) {
              $message =  "Connection failed: " . $e->getMessage();
              throw new Exception( $message );
          }
    }

    private function prepareQuery()
    {
        $this->query = $this->connection->prepare($this->localQuery);
        return $this;
    }
    
    private function setQuery(string $query)
    {
        //TODO need refactor
        $this->localQuery = $this->localQuery . ' ' . $query;
    }

    private function baseSelect()
    {
        $this->tableNameAs = generateRandomString();
        $query = "SELECT * FROM $this->tableName as $this->tableNameAs";
        $this->setQuery($query);
        return $query;
    }
}